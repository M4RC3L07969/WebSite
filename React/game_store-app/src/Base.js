import './Base.css';
import Base_topbar from './Base-topbar';
import Base_content from './Base-content';

function Base() {
    return (
        <div>
            <Base_topbar></Base_topbar>
            <div id="content">
                <Base_content></Base_content>
            </div>
        </div>
        
    );
}

export default Base;