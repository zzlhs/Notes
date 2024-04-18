import { useState } from 'react';
import { Button, Flex, Radio, Badge } from 'antd';
import TaskPage from '../TaskPage'



const baseStyle: React.CSSProperties = {
    width: '32%',
    height: '85vh',
    borderRadius: 20,
  };



const LevelTaskPage = () => {
    const [value, setValue] = useState<string>('horizontal');

    const taskLevels = [
        {
            name: "紧急事项",
            color: "red",
            c16: "#DF5F67"
        }, 
        {
            name: "重要事项",
            color: "blue",
            c16: "#EBAF29"
        },
        {
            name: "一般事项",
            color: "green",
            c16: "#75CD9D"
        }
    ]
    return(
        <Flex vertical>
            <Flex wrap="wrap"  gap="middle" vertical={value === 'vertical'}>
                {taskLevels.map((_, i) => (
                    <div key={i} 
                    style={{ ...baseStyle, backgroundColor: '#1677f444' }}>
                        <Badge.Ribbon text={_.name} color={_.c16} placement="start">
                            <TaskPage></TaskPage>
                        </Badge.Ribbon>
                        
                    </div>
                ))}
            </Flex>
        </Flex>
    )
};

export default LevelTaskPage;

// {/* <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
//{/* <Radio value="horizontal">horizontal</Radio>
//<Radio value="vertical">vertical</Radio> */}
// </Radio.Group> */}