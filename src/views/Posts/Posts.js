import { connectApp } from 'ayano-react';
import { Row, Col, Button, Layout, Menu } from 'antd';
import React from 'react';
import './Posts.scss'

const { Sider, Content } = Layout;

class Posts extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-container">
        <Row className="top-bar">
          <Col className="blogs-title" span={ 6 }>博文列表</Col>
          <Col className="float-right">
            <Button type="primary">新建博文</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={ 12 } xs={ 24 } >
            <div className="posts-list">
              {
                posts.map(post => {
                  return (
                    <div key={ post.id } className="post-item">
                      <Row>
                        <Col span={24}>{ post.title }</Col>
                      </Row>
                      <Row>
                        <Col span={12}>{ post.status == "published" ? `发布于${moment(post.published_at).format('YYYY-MM-DD mm:ss')}` : "草稿" }</Col>
                      </Row>
                    </div>
                  )
                })
              }
            </div>
          </Col>
          <Col sm={ 12 } xs={ 0 } ></Col>
        </Row>
      </div>
    )
  }
}

const mapStateToAction = (state) => ({
  posts: state.posts.list
})

export default connectApp(mapStateToAction)(Posts);
