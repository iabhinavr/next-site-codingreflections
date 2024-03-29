'use client';
import { useEffect } from "react";

import hljs from "highlight.js/lib/core";
import php from 'highlight.js/lib/languages/php';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import shell from 'highlight.js/lib/languages/shell';

hljs.registerLanguage('php', php);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('shell', shell);

import 'highlight.js/styles/github-dark.css'

export default function PostContent(props) {


    useEffect(() => {
        hljs.highlightAll();

        let yt_play = document.querySelector('figure.wp-block-embed-youtube .vid-play-btn');

        if(yt_play) {
            let yt_iframe = document.querySelector('figure.wp-block-embed-youtube iframe');
            let yt_iframe_src = yt_iframe.getAttribute('data-src');
            let yt_wrapper = document.querySelector('figure.wp-block-embed-youtube .vid-overlay-wrapper');
            
            yt_play.addEventListener('click', function() {
                console.log('yt clicked');
                yt_wrapper.style.display = "none";
                yt_iframe.setAttribute('src', yt_iframe_src);
            });
        }
        
    }, [])

    
    return (
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
    );
}