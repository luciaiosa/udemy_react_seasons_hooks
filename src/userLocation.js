import {useState, useEffect} from 'react';

export default () => {
    /* state = { latitude: null, errorMessage: '' } con Hooks: */
    const [latitude, setLatitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // solo tenemos componentDidMount(), no componentDidUpdate, así que queremos que sólo se renderice una vez!!!
    // Por eso, como segundo param, le paso un array vacio!!
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
        position => setLatitude(position.coords.latitude),
        err => setErrorMessage(err.message)
        );
    }, []);

    // se puede devolver un objeto, pero por convención, mejor un array, para usar destructuring!!
    return [latitude, errorMessage];
}