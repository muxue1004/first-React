// import 'antd/dist/antd.min.css';
import './ToolBar.css';
import { message,Alert,Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Toolbar() {
  function onClick(e) {
    e.stopPropagation();
    alert('Playing!')
  }

  return (
    <div
      className="tool-bar"
      onClick={() => {
        message.info('tool-bar')
      }}
    >
      <Button type="primary"
        onClick={onClick}
        // className="btn"
      >
        Play Movie
      </Button>
      <Button ghost icon={<SearchOutlined />}>Default</Button>
    </div>
  );
}

export default Toolbar;