export default class MRcalculate {

    dataMap = {}
    monthData = []
    calculateMonthData() {
        for (var index = 0; index < this.monthData.length; index++) {
            var element = this.monthData[index];
            let id = element[0]
            let plate = element[3]
            let parkId = element[4]
            let spaceNo = element[5]
            let createdDate = element[1]
            let endDate = element[2]
            let key = plate.toLocaleUpperCase() + parkId + spaceNo.toLocaleUpperCase()

            if (this.dataMap[key]) {
                if (this.dataMap[key].maxCreateDate < createdDate) {
                    this.dataMap[key].maxCreatedId = id
                    this.dataMap[key].maxCreateDate = createdDate
                }

                if (this.dataMap[key].maxEndDate < endDate) {
                    this.dataMap[key].maxEndDate = endDate
                    this.dataMap[key].otherId.push(this.dataMap[key].maxId)
                    this.dataMap[key].maxId = id
                }
                else {
                    this.dataMap[key].otherId.push(id)
                }
                this.dataMap[key].monthHouse.push(element)
            }
            else {

                this.dataMap[key] = {
                    maxId: id,
                    maxCreatedId: id,
                    otherId: [],
                    maxEndDate: endDate,
                    maxCreateDate: createdDate,
                    monthHouse: [element]
                }
            }
        }

        console.log(this.dataMap)
    }


  



}