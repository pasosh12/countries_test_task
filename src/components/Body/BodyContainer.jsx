import {connect} from 'react-redux';
// import ElementList from './ElementList'
const Body = () => {
    // countriesElements = props.
    return(
        <div>
            HELLO
            {/*<ElementList/>*/}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {}
}
const mapDispatchToProps=(dispatch)=>{
    return(
        // getCountries:()
 null
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
