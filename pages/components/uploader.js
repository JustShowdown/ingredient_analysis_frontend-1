import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 

const { Dragger } = Upload;
var config = require('../../public/config.json');


export default function MyDragger() {
    const props = {
        name: 'file',
        multiple: true,
        action: config.upload_addr,
        style:{width:"500px",height:"100px",top:50},
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file+'/'+config.upload_addr);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
    )
}