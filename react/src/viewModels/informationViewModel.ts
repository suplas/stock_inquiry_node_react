import StockInformationModel from "../models/stockInformationModel";
import axios from "axios";
class InforMationViewModel {
    private url:string;
    constructor () {
        this.url = "http://219.250.2.138:5018/krx/api/list/1";
    }

   async getStockList () {
        const model = new StockInformationModel();
        const response = await axios.get(this.url);
        const responeData = response.data.data;
        
        for(let i = 0; i < responeData.length; i++) {
            model.set(responeData[i]);
            const data = model.get();

        }
    }
}

const inforMationViewModel =  new InforMationViewModel();
export const getStockList = inforMationViewModel.getStockList.bind(inforMationViewModel);


