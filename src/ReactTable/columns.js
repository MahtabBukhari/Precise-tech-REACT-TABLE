 export const COLUMNS = [
      {
          Header:"Id",
          accessor:"id"
      },
      {
          Header:"Title",
          accessor:"title"
      },
      {
          Header:"Description",
          accessor:"description"
      },
      {
          Header:"Price",
          accessor:"price"
      },
      {
          Header:"Discount",
          accessor:"discountPercentage"
      },
      {
          Header:"Rating",
          accessor:"rating"
      },
      {
          Header:"Stock",
          accessor: "stock"
      },
      {
          Header:"Brand",
          accessor:"brand"
      },
      {
          Header:"Category",
          accessor: "category"
      },
      {
          Header:"Image",
          accessor: "thumbnail",
        Cell:({row})=> <img src={row.values.thumbnail} alt="imageProduct" height={50}/>
    
          
         
      }
    
    ]