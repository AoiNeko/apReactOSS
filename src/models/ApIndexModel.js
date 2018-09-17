import { observable, computed, action } from "mobx";
import RequestTool from "./RequestTool"

function addMenuToList(menu, menuList, data) {
    debugger
    if (menu.level == 1) {
        menuList.push(menu)
    }
    else {
        let parentMenu = getMenuById(menuList, menu.parent)
        if (parentMenu) {
            parentMenu.children = (parentMenu.children)? parent.children.concat(menu) : [].concat(menu)
        }
        else {
            data.forEach(function (serverMenu) {
                if (serverMenu.id == menu.parent) {
                    addMenuToList(serverMenu, menuList, data)
                }
            }, this);
        }
    }
}

function getMenuById(menuList, id) {
    let menu = null
    menuList.forEach(function (element) {
        if (element.id == id) {
            menu = element;
        }

        if (element.children) {
            menu = getMenuById(element.children, id)
        }

    }, this);
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
            "url": "/user/sys/res",
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