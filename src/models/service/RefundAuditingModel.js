import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"

export default class RefundAuditingModel {

    @observable dataSource = []



    @action
    getRefundData(values) {

        let param = {
            "url": "/paycenter/refund/list",
            "success": this.dataFetch.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)

    }

    @action
    dataFetch(data) {
        this.dataSource = data;
    }
}
