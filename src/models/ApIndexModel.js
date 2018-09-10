import { observable,computed, action } from "mobx";

class ApIndexModel {

    @observable userMenu = [];
    
    @computed
    get menuList() {
        return this.userMenu
    }


    @action
    getMenu() {
        this.userMenu = [
            {
                id: 1,
                name: "系统菜单",
                children: [
                    {
                        name: "退款管理1",
                        id: "2"
                    },
                    {
                        name: "退款管理2",
                        id: "3"
                    }
                ]
            },
            {
                id: 4,
                name: "系统菜单2",
                children: [
                    {
                        name: "支付管理1",
                        id: "5"
                    },
                    {
                        name: "支付管理2",
                        id: "6"
                    }
                ]
            }
        ]
    }

}

export default ApIndexModel