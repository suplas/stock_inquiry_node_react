import BannerComponent from "../public/bannerComponent";
import StockItemListComponent from "../public/stockItemListComponent";


const ContentComponent = () => {
  return (
    <div className="mt-3 pl-2 pr-2">
      <BannerComponent />
      <StockItemListComponent title={"관심종목"} isMore={false}/>
    </div>
  );
};

export default ContentComponent;
