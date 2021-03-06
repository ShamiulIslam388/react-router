import React from 'react'
import DocumentMeta from 'react-document-meta';

function Contact() {
    const meta = {
        title: 'Some Meta Title-contact page',
        description: 'I am a description, and I can create multiple tags-contact page',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      };

    return (
        <DocumentMeta {...meta}>
        <div className="container">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        </DocumentMeta>
    )
}

export default Contact;
