import './HomePage.css';
import {quotes} from './Quotes'

  const random =  Math.floor(Math.random()*5);

export default function HomePage(){
    return(
        <>
        <div class='background pacifico-regular '> {quotes[random].quote} 
           <div class="text-author"> - {quotes[random].author}</div>
            <div class="button-area container">
                {/* <div class="row justify-content-center">
                    <div class="col-3 custom-btn">
                    <button type="button" class="btn btn-primary btn-lg">Reload Quote</button>
                    </div>
                    <div class="col-3 custom-btn">
                    <button type="button" class="btn btn-primary btn-lg">Blog</button>
                    </div>
                    <div class="col-3 custom-btn">
                    <button type="button" class="btn btn-primary btn-lg">About</button>
                    </div>
                </div> */}
                 </div>

        </div>

        
        </>
    )

}