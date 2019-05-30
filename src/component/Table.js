
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table,Popconfirm, Tag,Icon ,Modal, Button, Row, Col, Tree,Input,Progress} from 'antd';
import Allocation from './Allocation';
import De_Allocation from './De_Allocation';
import More from './More'

const { TreeNode } = Tree;
const Search = Input.Search;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
   
  },
  {
    title: 'Project',
    dataIndex: 'age',
    key: 'age',
    render: text => <a href="#:;">{text}</a>,
  },
  {
    title: '@mail',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'QA') {
            color = 'volcano';
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {

    title: "Action",
    key: "action",

    render: (text, record) => (
      <Row>
        <Col span={12}>
        <Popconfirm
            title="Are you sure, do you want edit this Company?"
            icon={<Icon type="question-circle-o" style={{ color: "green" }} />}
           
            okText="Yes"
            cancelText="No"
          >
            <a href="#:;" style={{ color: "blue" }}>
              <Icon type="edit" className="datatable-icon" />

            </a>
          </Popconfirm>
          
        </Col>
        <Col >
          <Popconfirm
            title="Are you sure, do you want delete this Company?"
            icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
           
            okText="Yes"
            cancelText="No"
          >
            <a href="#:;" style={{ color: "red" }}>
              <Icon type="delete" className="datatable-icon" />

            </a>
          </Popconfirm>
        </Col>
      
</Row>

    )
  },
  {
    title: "More Details",
    dataIndex: "admin",
    render: () => (
      <Row>
            <Col>
             
              <More />
            </Col>
            </Row>
     
//       <Row>
        
//        <span>
//          <a href="hello" style={{ color: "green" }}>
//            <Icon type="fullscreen" className="datatable-icon" />
//  <More />
//          </a>
//        </span>
//  <Col span={5}>
//                <More/>
// </Col> 
//               </Row> 
    )
  },
];

const data = [
  {
    key: '1',
    name: 'Mercy',
    age: 'Defect System',
    address: 'hello@gmail.com',
    tags: [ 'developer','nice'],
  },
  {
    key: '2',
    name: 'Mercy Venesiya',
    age: 'Hospital Management' ,
    address: 'defect@gmail.com',
    tags: ['QA'],
  },
  {
    key: '3',
    name: 'Mercy Venesiya',
    age: 'Defect Tracker',
    address: 'm01venesiya@gmail.com',
    tags: ['Senior Engineer'],
  },
  {
    key: '4',
    name: 'Mercy',
    age: 'Hospital Management',
    address: 'hello@gmail.com',
    tags: [ 'developer','nice'],
  },
  {
    key: '5',
    name: 'Mercy Venesiya',
    age: 'Defect Tracker' ,
    address: 'defect@gmail.com',
    tags: ['QA'],
  },
  {
    key: '6',
    name: 'Mercy Venesiya',
    age: 'Defect Tracker',
    address: 'm01venesiya@gmail.com',
    tags: ['Senior Engineer'],
  },
  {
    key: '7',
    name: 'Mercy',
    age: 'Defect System',
    address: 'hello@gmail.com',
    tags: [ 'developer','nice'],
  },
  {
    key: '8',
    name: 'Mercy Venesiya',
    age: 'Defect Tracker' ,
    address: 'defect@gmail.com',
    tags: ['QA'],
  },
  {
    key: '9',
    name: 'Mercy Venesiya',
    age: 'Defect Tracker',
    address: 'm01venesiya@gmail.com',
    tags: ['-','Senior Engineer'],
  },
];


// ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('container'));
      export class Table1 extends Component {
        onSelect = (selectedKeys, info) => {
          console.log('selected', selectedKeys, info);
        };
      
        onCheck = (checkedKeys, info) => {
          console.log('onCheck', checkedKeys, info);
        };
      
        state = { visible: false, showModalDe: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showModalDe = () => {
    this.setState({
      showModalDe: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleOkDe = e => {
    console.log(e);
    this.setState({
      showModalDe: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancelDe = e => {
    console.log(e);
    this.setState({
      showModalDe: false,
    });
  };
        render(){
          
          return (
            <div>
              <div>
                <Row>
                  <Col span={3}>
        <Button type="primary" onClick={this.showModal}>
          Allocation
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="900px"
        >
           <Search style={{ marginBottom: 8 }} placeholder="Search"   onCheck={this.onCheck} />
        <Tree
          onExpand={this.onExpand}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
         
        </Tree>
       <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="Projects" key="0-0">
          {/* <TreeNode title="Defect Tracker" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
            
          </TreeNode> */}
          <TreeNode title="Defect System" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="Hospital Management" key="0-0-1">
          <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
          <Allocation />
        </Modal>
        {/* <Button type="primary" onClick={this.showModal}>
            <Icon type="diff" theme="filled" />
            Add New 
          </Button> */}
          
        </Col>
        <Col span={6}>
        <Button type="danger" onClick={this.showModalDe}>
          De-Allocation
        </Button>
        
        <Modal
          title="Basic Modal"
          visible={this.state.showModalDe}
          onOk={this.handleOkDe}
          onCancel={this.handleCancelDe}
          width="900px"
        >
        <De_Allocation />
        </Modal>
        </Col>
        <Col span={5}>
  <div style={{ width: 170 }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>,
  </Col>
  <Col span={5}>
  <div>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div>,
  </Col>
        </Row>
      </div>
    
<Table columns={columns} pagination ={{pageSize:5}}dataSource={data} />

            </div>
            
          )
        }
      }    
      export default Table1;