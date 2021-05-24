import Axios from 'axios';
var fileDownload = require('js-file-download');

const CV = () => {
  const handleDownload = () => {
    Axios.get('http://metronomebackend.apoppe.com', {
      responseType: 'blob',
    }).then((res) => {
      fileDownload(res.data, 'Poppe_CV.pdf');
    });
  };
  return (
    <div className='text-center underline bg-black z-50 py-1 px-2 rounded-full shadow-xl'>
      <span
        className='text-center underline bg-black shadow-xl'
        onClick={handleDownload}
      >
        Télécharger mon CV
      </span>
    </div>
  );
};

export default CV;
