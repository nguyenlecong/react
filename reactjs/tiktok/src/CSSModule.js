import Button from './components/Button'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import GlobalStyles from './components/GlobalStyles'


function Content() {
    return (
        <GlobalStyles>
            <div style={{padding: '0 32px'}}>
                <Heading />
                <Paragraph />
            </div>
            <div className='d-flex'>
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
            <div>
                <Button />
            </div>
            <div>
                <Button primary/>
            </div>
        </GlobalStyles>
    )
}

export default Content