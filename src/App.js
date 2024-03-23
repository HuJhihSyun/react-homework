import './scss/App.scss';
import { Layout } from 'antd';
import NavbarComponent from './components/organisms/NavbarComponent';
import BannerComponent from './components/organisms/BannerComponent';
import FeatureComponent from './components/organisms/FeatureComponent';
import WorkComponent from './components/organisms/WorkComponent';
import StoryComponent from './components/organisms/StoryComponent';

const { Header, Content, Footer } = Layout;

const layoutStyle = {
  width: '100%',
};

const headerStyle = {
  height: 'auto',
  paddingInline: 48,
  backgroundColor: '#F8D57E',
};

const contentStyle = {
  paddingInline: 48,
  backgroundColor: '#F8F9FF',
};

const footerStyle = {
  backgroundColor: '#F8D57E',
};

function App() {
  
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <NavbarComponent />
        <BannerComponent />
      </Header>
      <Content style={contentStyle}>
        <FeatureComponent />
        <WorkComponent />
      </Content>
      <Footer style={footerStyle}>
        <StoryComponent />
      </Footer>
    </Layout>
  );
}

export default App;
