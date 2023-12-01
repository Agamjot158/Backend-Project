import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { getAllBlogs } from './blog.js'



// setupCounter(document.querySelector('#counter'));

getAllBlogs(document.querySelector(`blog-list`));
