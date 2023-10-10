type SetPropsType = {
  id: number;
  BAS_DD: number;
  ISU_NM: string;
  MKTCAP: string;
  MKT_NM: number;
  TDD_OPNPRC: number;
  ACC_TRDVOL: number;
}
class StockInformationModel {
  private id: number;
  private BAS_DD: number;
  private ISU_NM: string;
  private MKTCAP: string;
  private MKT_NM: number;
  private TDD_OPNPRC: number;
  private ACC_TRDVOL: number;

  constructor() {
    this.id = 0;
    this.BAS_DD = 0;
    this.ISU_NM = "";
    this.MKTCAP = "";
    this.MKT_NM = 0;
    this.TDD_OPNPRC = 0;
    this.ACC_TRDVOL = 0;
  }

  set(item: SetPropsType) {
    this.id = item.id;
    this.BAS_DD = item.BAS_DD;
    this.ISU_NM = item.ISU_NM;
    this.MKTCAP = item.MKTCAP;
    this.MKT_NM = item.MKT_NM;
    this.TDD_OPNPRC = item.TDD_OPNPRC;
    this.ACC_TRDVOL = item.ACC_TRDVOL;
  }

  get() {
    const item = {
        id: this.id,
        BAS_DD: this.BAS_DD,
        ISU_NM: this.ISU_NM,
        MKTCAP: this.MKTCAP,
        MKT_NM: this.MKT_NM,
        TDD_OPNPRC: this.TDD_OPNPRC,
        ACC_TRDVOL: this.ACC_TRDVOL,
    }
    return item;
  }
}

export default StockInformationModel;
