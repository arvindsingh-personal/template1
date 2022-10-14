import {
    Page,
    Layout,
    Card,
    FormLayout,
    TextField,
    TextContainer,
    TextStyle,
    Heading,
  } from '@shopify/polaris';
  import React from 'react';
import { connect } from 'react-redux';
import { mapStateToDispatch, mapStateToProps } from './redux/ManageState';
  
  function Container(props) {
    return (
      <Page fullWidth>
        <Layout>
          <Layout.Section oneThird>
            <div style={{marginTop: 'var(--p-space-5)'}}>
              <TextContainer>
                <Heading id="storeDetails">Store details</Heading>
                <p>
                  <TextStyle variation="subdued">
                    Shopify and your customers will use this information to
                    contact you.
                  </TextStyle>
                </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <TextField
                  label="Store name"
                  onChange={() => {}}
                  autoComplete="off"
                />
                <TextField
                  type="email"
                  label="Account email"
                  onChange={() => {}}
                  autoComplete="email"
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  export default connect(mapStateToProps,mapStateToDispatch)(Container)