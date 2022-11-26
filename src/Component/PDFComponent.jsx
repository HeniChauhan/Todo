import { pdfFromReact } from "generate-pdf-from-react-html";
const PDFComponent = () =>{
    return(<div>
      
        <div className="element-to-print">
            <center>
            <h1>Example page</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia dicta
            itaque sunt fuga, illo ad eaque ea commodi temporibus perferendis
            provident doloribus non iusto asperiores excepturi autem facere qui!
          </p>
          </center>
        </div>
        <button
          onClick={() =>
            pdfFromReact(".element-to-print", "My-file", "p", true, false)
          }
        >Download </button>
      </div>);
}
export default PDFComponent;
