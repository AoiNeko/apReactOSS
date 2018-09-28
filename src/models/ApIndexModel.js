import { observable, computed, action } from "mobx";
import RequestTool from "./RequestTool"

function addMenuToList(menu, menuList, data) {
    console.log(menu)
    if (getMenuById(menuList, menu.id)) {
        return
    }
    if (menu.level == 0) {
        menuList.push(menu)
    }
    else {
        let parentMenu = getMenuById(menuList, menu.parentId)
        if (parentMenu) {
            parentMenu.children = (parentMenu.children) ? parentMenu.children.concat(menu) : [].concat(menu)
        }
        else {
            data.forEach(function (serverMenu) {
                if (serverMenu.id == menu.parentId) {
                    addMenuToList(serverMenu, menuList, data)
                }
            }, this);
        }
    }
}

function getMenuById(menuList, id) {
    let menu = null
    for (var index in menuList) {
        let element = menuList[index]
        if (element.id == id) {
            menu = element;
            break
        }

        if (element.children) {
            menu = getMenuById(element.children, id)
            if (menu != null) {
                break
            }
        }
    }
    return menu
}

class ApIndexModel {

    @observable userMenu = [];

    @computed
    get menuList() {
        return this.userMenu
    }


    @action
    getMenu() {
        let param = {
            "url": "/paycenter/user/sys/res",
            "success": this.composeMenu.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
    }



    @action
    composeMenu(data) {
        console.log(data)
        if (data.length > 0) {
            let menuList = []
            for (let index = 0; index < data.length; index++) {
                let menu = data[index];
                addMenuToList(menu, menuList, data)
            }
            this.userMenu = menuList
        }
        else {
            this.userMenu = []
        }
    }

}

export default ApIndexModel