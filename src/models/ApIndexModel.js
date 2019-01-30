import { observable, computed, action } from "mobx";
import RequestTool from "./RequestTool"
import { message } from 'antd'
const request = new RequestTool()
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

    @observable userName = "anonymous"

    @observable userMenu = [];

    @observable collapsed = false

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
        request.commonFetch(param)
    }

    @action
    toggleCollapsed() {
        this.collapsed = !this.collapsed
    }


    @action
    getMenuName(menuList, resUrl) {
        let name = ""
        menuList.map(menu => {
            if (menu.resUrl == resUrl) {
                name = menu.name
            }

            if (name == "" && menu.children) {
                name = this.getMenuName(menu.children, resUrl)
            }
        })

        return name
    }

    @action
    signOut() {
        let param = {
            "url": "/paycenter/logout",
            "success": this.signOutSuccess.bind(this)
        }
        request.commonFetch(param)
    }

    @action
    signOutSuccess(data) {
        message.success("注销成功")
        // window.location.href="paycenter/login"
    }

    @action
    composeMenu(res) {
        console.log(data)

        let data = res["menuList"]
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
        this.userName = res["userName"]
    }

}

export default ApIndexModel