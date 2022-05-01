import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddBlog() {
    const [CKEditorStatus, setCKEditorStatus] = useState(false)
    const handleCKEditor = () => {
        setCKEditorStatus(true)
    }
    const [sectionData, setSectionData] = useState('')
    const handleChange = (e, editor) => {
        setSectionData(editor.getData());
        // console.log(editor.getData());
    }

    const [blogData, setBlogData] = useState([])
    const handleSave = () => {
        setCKEditorStatus(false);
        setBlogData([...blogData, sectionData]);
        setSectionData('');
        console.log(blogData);
    }

    function uploadAdapter(loader) {
        return {
          upload: () => {
            return new Promise((resolve, reject) => {
              const body = new FormData();
              loader.file.then((file) => {
                body.append("files", file);
                console.log(body);
            //     // let headers = new Headers();
            //     // headers.append("Origin", "http://localhost:3000");
            //     fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
            //       method: "post",
            //       body: body
            //       // mode: "no-cors"
            //     })
            //       .then((res) => res.json())
            //       .then((res) => {
            //         resolve({
            //           default: `${API_URL}/${res.filename}`
            //         });
            //       })
            //       .catch((err) => {
            //         reject(err);
            //       });
              });
            });
          }
        };
      }
    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return uploadAdapter(loader);
        };
      }

    return <>
        <div className='row justify-content-center mx-0'>
            <div className='col-md-6 col-8 text-center'>
                <div className='h4 mt-5'>Shiva Singh</div>
                <div className='h6 mb-5'>{Date().toLocaleString()}</div>
            </div>
        </div>
        <div className='row justify-content-center mx-0'>
            <div className='col-md-8 col-10'>
                <div className='ska-box'>
                    {blogData.map((item, index) => {
                        return (<>
                            <div dangerouslySetInnerHTML={{ __html: item }} key={index} />
                            <button className='btn btn-primary'>edit</button>
                        </>)
                    })}
                    <div className="d-grid gap-2 col-6 m-2 mx-auto ">
                        <button className="btn btn-ska-primary-dark rounded-pill"
                            onClick={handleCKEditor}>Add New Section</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='row justify-content-center mx-0'>
            <div className='col-md-7 col-9'>
                {CKEditorStatus && <>
                    <CKEditor
                        config={{
                            extraPlugins: [uploadPlugin]
                        }}
                        editor={ClassicEditor}
                        data={sectionData}
                        onChange={handleChange}
                    />
                    <div className="d-grid gap-2 col-6 m-4 mx-auto ">
                        <button className="btn btn-ska-primary-dark rounded-pill"
                            onClick={handleSave}>Save</button>
                    </div>
                </>}
            </div>
        </div>
    </>
}
