import { useState, useEffect } from 'react';
// import axios from "axios";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();
// const token = cookies.get("TOKEN");

const PageNumbers = ({ numPages, onPageClick }) => {
  const [clickedPage, setClickedPage] = useState(1);
  const [hoveredPage, setHoveredPage] = useState(null);

  const pageNumbers = Array.from({ length: numPages }, (_, index) => index + 1);

  const handleMouseEnter = (pageNumber) => {
      setHoveredPage(pageNumber);
  };

  const handleMouseLeave = () => {
      setHoveredPage(null);
  };

  const handleClick = (pageNumber) => {
    setClickedPage(pageNumber);
    onPageClick(pageNumber);
  };

  const getPageNumberStyle = (pageNumber) => ({
    margin: '0 8px',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: clickedPage === pageNumber ? '#4200FF' : (hoveredPage === pageNumber ? '#4200FF' : '#000'),
    borderRadius: '5px',
    border: clickedPage === pageNumber ? '1px solid #4200FF' : (hoveredPage === pageNumber ? '1px solid #4200FF' : '1px solid #000'),
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  });

  return (
    <div className="flex justify-end mt-20">
      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          style={getPageNumberStyle(pageNumber)}
          onClick={() => handleClick(pageNumber)}
          onMouseEnter={() => handleMouseEnter(pageNumber)}
          onMouseLeave={handleMouseLeave}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
};

export const AdminViewHistoryTemplate = () => {

  const FullHistoryData = ({ header, data }) => {
    return (
      <div className="flex flex-col w-full">
        {header.map((headerData, rowIndex) => (
          <div className="block mb-2 text-sm font-medium text-[#FFFFFF]" 
            key={rowIndex} 
            style={{ display: 'flex', width: '100%', border: '1px solid #000', backgroundColor: '#00B9E2', textAlign: 'center', fontSize: '16px'}}>
            {headerData.map((cellData, cellIndex) => (
              <div 
                key={cellIndex} 
                style={{ flex: 1, padding: '14px', cursor: 'pointer' }}
                onClick={() => handleSort(cellData)}
              >
                {cellData}
                {sortColumn === cellData && (
                  <span style={{ marginLeft: '5px' }}>{sortOrder === 'asc' ? '▲' : '▼'}</span>
                )}
              </div>
            ))}
          </div>
        ))}
  
          {data.map((rowData, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #ddd', textAlign: 'center' }}>
                  {rowData.map((cellData, cellIndex) => (
                      <div key={cellIndex} style={{ flex: 1, padding: '14px' }}>
                          {cellData}
                      </div>
                  ))}
              </div>
          ))}
      </div>
    );
};

  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    handlePageClick(currentPage);
  };

    // const [FeedbackList, setFeedbackList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [numberOfPages, setNumberOfPages] = useState(1);

    const [searchTerms, setSearchTerms] = useState(Array(6).fill(''));
    const [sortColumn, setSortColumn] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');


    const handleInputChange = (index, value) => {
      const newSearchTerms = [...searchTerms];
      newSearchTerms[index] = value;
      setSearchTerms(newSearchTerms);
    };


    const tableHeader = [['MSSV', 'Tên tài liệu', 'Ngày và giờ', 'Loại giấy', 'Nơi in', 'Tên máy in']];
    const [tableData, setTableData] = useState([
      ['2111111', 'DSA', '28/11/2023 09:11', 'A4', 'C1', 'Epson WorkForce Pro'],
      ['2111111', 'DSA', '28/11/2023 09:11', 'A4', 'C2', 'HP OfficeJet Pro'],
      ['2111111', 'DSA', '28/11/2023 09:11', 'A4', 'C5', 'Ricoh Aficio SP'],
      ['2111111', 'DSA', '28/11/2023 09:11', 'A4', 'C1', 'Kyocera Ecosys'],
      ['2111111', 'DSA', '28/11/2023 09:11', 'A4', 'C2', 'Canon MAXIFY'],
    ]);

    const handlePageClick = (pageNumber) => {
      // axios.post("http://localhost:8080/api/history/admin/printings", {}, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      // .then((response) => {
      //   if (response.status === 200 && 'printHistory' in response.data) {
      //     const fetchedFeedbackList = JSON.parse(response.data.printHistory);
      //     // const tripledFeedbackList = Array.from({ length: 3 }, () => fetchedFeedbackList).flat();
      //     setFeedbackList(fetchedFeedbackList);

      //     const calculatedNumberOfPages = Math.ceil(fetchedFeedbackList.length / 3);
      //     setNumberOfPages(calculatedNumberOfPages);

          setCurrentPage(pageNumber);
          const newData = generateDataForPage(pageNumber);
          setTableData(newData);
      //   }
      // })
      // .catch((error) => {
      //   console.error("Error!!!!!!", error);
      // });
    };
  
    var fullHistory = 
      [['2111111', 'DSA1', '28/11/2023 09:11', 'A4', 'C1', 'Epson WorkForce Pro'],
      ['2111111', 'DSA1', '28/11/2023 09:11', 'A4', 'C2', 'HP OfficeJet Pro'],
      ['2111111', 'DSA1', '28/11/2023 09:11', 'A4', 'C5', 'Ricoh Aficio SP'],
      ['2111111', 'DSA1', '28/11/2023 09:11', 'A4', 'C1', 'Kyocera Ecosys'],
      ['2111111', 'DSA1', '28/11/2023 09:11', 'A4', 'C2', 'Canon MAXIFY'],
      ['2111111', 'DSA2', '28/11/2023 09:11', 'A4', 'C1', 'Epson WorkForce Pro'],
      ['2111111', 'DSA2', '28/11/2023 09:11', 'A4', 'C2', 'HP OfficeJet Pro'],
      ['2111111', 'DSA2', '28/11/2023 09:11', 'A4', 'C5', 'Ricoh Aficio SP'],
      ['2111111', 'DSA2', '28/11/2023 09:11', 'A4', 'C1', 'Kyocera Ecosys'],
      ['2111111', 'DSA2', '28/11/2023 09:11', 'A4', 'C2', 'Canon MAXIFY'],
      ['2111111', 'DSA3', '28/11/2023 09:11', 'A4', 'C1', 'Epson WorkForce Pro'],
      ['2111111', 'DSA3', '28/11/2023 09:11', 'A4', 'C2', 'HP OfficeJet Pro'],
      ['2111111', 'DSA3', '28/11/2023 09:11', 'A4', 'C5', 'Ricoh Aficio SP'],
      ['2111111', 'DSA3', '28/11/2023 09:11', 'A4', 'C1', 'Kyocera Ecosys'],
      ['2111111', 'DSA3', '28/11/2023 09:11', 'A4', 'C2', 'Canon MAXIFY'],
    ]

      var numberOfPages = fullHistory.length / 5;

      const generateDataForPage = (pageNumber) => {
        const startIndex = (pageNumber - 1) * 5;
        const endIndex = startIndex + 5;
      
        let filteredData = fullHistory.filter((row) =>
          row[0].toLowerCase().includes(searchTerms[0].toLowerCase()) &&
          row[1].toLowerCase().includes(searchTerms[1].toLowerCase()) &&
          row[2].toLowerCase().includes(searchTerms[2].toLowerCase()) &&
          row[3].toLowerCase().includes(searchTerms[3].toLowerCase()) &&
          row[4].toLowerCase().includes(searchTerms[4].toLowerCase()) &&
          row[5].toLowerCase().includes(searchTerms[5].toLowerCase())
        );
        if (sortColumn) {
          const columnIndex = tableHeader[0].indexOf(sortColumn);
          filteredData = filteredData.sort((a, b) => {
            if (a[columnIndex] < b[columnIndex]) return sortOrder === 'asc' ? -1 : 1;
            if (a[columnIndex] > b[columnIndex]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
          });
        }
      
        return filteredData.slice(startIndex, endIndex);
      };

      useEffect(() => {
        handlePageClick(1);
      }, [searchTerms]);

    return (
    <div className="PrintOneTemplate grid grid-cols-1">
        <div className="left col-span-1 ml-[50px] mr-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Lịch sử in ấn</h1>
            <div className="flex justify-between mb-[5px]">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={index} style={{ display: 'flex', width: '16.66%', border: '1px solid #000', textAlign: 'center', fontSize: '16px'}}>
                  <input
                    className="p-2 text-center"
                    type="text"
                    placeholder={`Tìm kiếm...`}
                    value={searchTerms[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <FullHistoryData header={tableHeader} data={tableData} />
            <PageNumbers numPages={numberOfPages} onPageClick={handlePageClick} />
        </div>
    </div>
    )
}

export default AdminViewHistoryTemplate