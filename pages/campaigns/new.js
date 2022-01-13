import React, { Component } from "react";
import Layout from "../../components/layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import "semantic-ui-css/semantic.min.css";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
  };

  async onSubmit(event) {
    event.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form
          onSubmit={this.onSubmit.bind(this)}
          error={!!this.state.errorMessage}
        >
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="Wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
            <Message error header="Uh Oh!" content={this.state.errorMessage} />
            <Button primary>Create Campaign</Button>
          </Form.Field>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
