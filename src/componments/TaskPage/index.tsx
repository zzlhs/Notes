import { useState } from 'react';


import type { CollapseProps } from 'antd';
import { Collapse, Button, ConfigProvider, Modal, Space, Checkbox } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;
// import type { CheckboxProps } from 'antd';

const TaskPage = () => {
      const text = (
        // <Checkbox style={{ paddingLeft: '0' }}>
        //   A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        //   as a welcome guest in many households across the world.
        // </Checkbox>
        <p>123</p>
      );

      const collapseTypeLabel = [
        {
            label:"未完成",
            type: 0,
            children: [
                <Checkbox> This is panel header 2 </Checkbox>
            ]
        },{
            label: "已完成",
            type:1
        }
      ]
      
      const itemsNest: CollapseProps['items'] = [
        {
          key: '1',
          label: 'This is panel nest panel',
          children: <p>{text}</p>,
        },
      ];
      
      const items: CollapseProps['items'] = [
        {
          key: '1',
          label: collapseTypeLabel[0].label,
          children: <><div><Checkbox> 2024-02-01-今天不学习  </Checkbox> </div>
                      <div><Checkbox> 2024-02-02-今天还是不学习 </Checkbox></div>
                    </>
        },
        {
          key: '2',
          label: collapseTypeLabel[1].label,
          children: <>
                        <div><Checkbox> 2024-02-01-今天不学习将来去搬砖  </Checkbox> </div>
                    </>,
        }
      ];

      const onChange = (key: string | string[]) => {
        console.log(key);
      };

      const updateTask = () => {
        console.log("editTask...");
      }

      const addTask = () => {
        console.log("editTask...");
      }
      /**
       * 弹出添加任务相关
       */
      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const modalAddTaskObject = {
        title: "准备做什么？",
        desc: "描述..."

      };
      

        /* 上 右 下 左 */
    return(
        <div style={{ padding: '2vh 1vh 1vh 1vh'}}>
            <Button type="primary" danger onClick={showModal} style={{ padding: '0 0vh 0 0vh'}}>
                添加任务
            </Button>
            <Modal 
            title={modalAddTaskObject.title} 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={(_, { OkBtn, CancelBtn }) => (
                <>
                  <Button>Custom Button</Button>
                  <CancelBtn />
                  <OkBtn />
                </>
              )}>
                <TextArea rows={4} placeholder={modalAddTaskObject.desc} maxLength={6} />
            </Modal>
            <Collapse 
            onChange={onChange} 
            items={items} 
            bordered={false} 
            defaultActiveKey={['1']}>
            </Collapse>

        </div>
    )
};

export default TaskPage;

<div>
    <Checkbox>123</Checkbox>
    <p>123</p>
</div>