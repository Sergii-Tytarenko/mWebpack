import normalize from 'normalize.css'
import '../scss/style.scss';
import body_lock from './functions/bodylock';

console.log('hello world')
body_lock()

// import webpack from '../images/webpack.png'
require.context("../images/", true, /\.(png|svg|jpg|gif)$/);