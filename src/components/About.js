import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container main-content'>
            <div className='container-inned' style={{backgroundColor: 'white', padding: '34px', borderRadius: '8px'}}>
                <Link to='/react-weather'>Kembali ke beranda</Link><br/><br/>
                <h3>Library yang digunakan:</h3>
                <ul style={{padding: '8px 16px'}}>
                    <li>fast-xml-parser - <a href="https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/LICENSE">MIT License</a></li>
                    <li>react-icons (Material Design Icons) - <a href="https://github.com/google/material-design-icons/blob/master/LICENSE">Apache License Version 2.0</a></li>
                    <li>Data Prakiraan Cuaca - Data Terbuka BMKG - <a href="https://data.bmkg.go.id/">Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About
