import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../reducers/pagingSlice";

class InforMationViewModel {
    private url:string;
    constructor () {
        this.url = "127.0.0.1/3000/krx/api/list";
    }

    async getList() {
        const response = await axios.get(this.url);
        
    }

}

export default InforMationViewModel;