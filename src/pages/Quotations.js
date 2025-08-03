import React from 'react';
import { Card, Typography } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Quotations = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <FileTextOutlined
            style={{ fontSize: '64px', color: '#ccc', marginBottom: '16px' }}
          />
          <Title level={3} type="secondary">
            Coming Soon
          </Title>
          <Text type="secondary">
            Quotation management functionality will be available soon.
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Quotations;
