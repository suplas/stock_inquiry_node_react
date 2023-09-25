
class StockInformationModel {
    private id:number;
    private bas_dd:number;
    private mkt_nm:string;
    private isu_nm:string;
    private acc_trdvol:number;
    private mktcap:number;
    private tdd_opnprc:number;

    constructor(
        id:number,
        bas_dd:number,
        mkt_nm:string,
        isu_nm:string,
        acc_trdvol:number,
        mktcap:number,
        tdd_opnprc:number
    ) {
        this.id = id;
        this.bas_dd = bas_dd;
        this.mkt_nm = mkt_nm;
        this.isu_nm = isu_nm;
        this.acc_trdvol = acc_trdvol;
        this.mktcap = mktcap;
        this.tdd_opnprc = tdd_opnprc;
    }
}

export default StockInformationModel;