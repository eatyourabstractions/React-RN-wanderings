
import axios from 'axios'


const fetchData = async () => {

    const work_orders = "https://www.hatchways.io/api/assessment/work_orders"
    const workers_info_url = "https://www.hatchways.io/api/assessment/workers/"

    const myOrders = await axios.get(work_orders)
    
    let myData = []
    let i;
    for(i=0; i < myOrders.data.orders.length; i++){
        let _order = myOrders.data.orders[i]
        let myWorker = await axios.get(workers_info_url + _order.workerId)
        myData.push({order:_order , worker: myWorker.data.worker })
    }
    
     return myData

    };

    test('fetchData returns array of length 20', () =>{
        return fetchData().then(myArr => {
            expect(myArr.length).toBe(20)
        })
    })

   