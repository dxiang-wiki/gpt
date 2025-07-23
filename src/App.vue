<template>
  <div class="container ivu-p">
    <div class="dialog">
      <template v-for="(item, index) in dialogs" :key="index">
<<<<<<< HEAD
        <div class="dialog-item"
          :class="{ 'dialog-item-me': item.role === 'me', 'dialog-item-ai': item.role === 'ai' }">
=======
        <div
          class="dialog-item"
          :class="{
            'dialog-item-me': item.role === 'me',
            'dialog-item-ai': item.role === 'ai',
          }"
        >
          <div class="dialog-item-main">{{ item.text }}</div>
        </div>
      </template>
    </div>
    <div class="question ivu-mt">
      <Input
        v-model="question"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6 }"
        placeholder="输入你的问题"
      />
      <Row class="ivu-mt">
        <Col>
<<<<<<< HEAD
        <Button type="primary" size="large" icon="md-send" :loading="loading" @click="handleSend">发送</Button>
        </Col>
        <Col>
        <Button size="large" class="ivu-ml" icon="md-add" :disabled="loading" @click="handleNewChat">新对话</Button>
        </Col>
      </Row>
      <Typography class="ivu-text-center ivu-m">
        Powered By <img src="./assets/logo.png" class="logo"> <a href="https://inscode.net"
          target="_blank">InsCode.net</a>
=======
          <Button
            type="primary"
            size="large"
            icon="md-send"
            :loading="loading"
            @click="handleSend"
            >发送</Button
          >
        </Col>
        <Col>
          <Button
            size="large"
            class="ivu-ml"
            icon="md-add"
            :disabled="loading"
            @click="handleNewChat"
            >新对话</Button
          >
        </Col>
      </Row>
      <Typography class="ivu-text-center ivu-m">
        Powered By <img src="./assets/logo.png" class="logo" />
        <a href="https://inscode.net" target="_blank">InsCode.net</a>
      </Typography>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
  import { fetchEventSource } from '@microsoft/fetch-event-source';
import { apiKey, apiUrl } from './api';
=======
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { apiKey, apiUrl } from "./api";

export default {
  data() {
    return {
      question: "",
      loading: false,
      dialogs: [],
    };
  },
  methods: {
    handleSend() {
      if (this.loading || this.question === "") return;
      this.loading = true;

      const question = this.question;
      this.question = "";

      this.dialogs.push({
        id: this.dialogs.length + 1,
        role: "me",
        text: question,
      });

      const aiDialogID = this.dialogs.length + 1;

      this.dialogs.push({
        id: aiDialogID,
        role: "ai",
        text: "AI 思考中...",
      });

      const dialog = this.dialogs.find((item) => item.id === aiDialogID);

      const body = {
        model: "Deepseek-R1",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
        stream: false,
        max_tokens: 512,
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        frequency_penalty: 0.5,
        n: 1,
        response_format: {
          type: "text",
        },
      };

      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch(apiUrl, options)
        .then((response) => response.json())
        .then((response) => {
          if (response.choices && response.choices.length > 0) {
            dialog.text = response.choices[0].message.content;
          }
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
          dialog.text = "请求失败，请稍后重试";
          this.loading = false;
        });
    },
    handleNewChat() {
      this.dialogs = [];
    },
  },
};
</script>
<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .dialog {
    flex: 1;
    overflow: auto;
  }

  .dialog-item {
    display: flex;
  }

  .dialog-item-main {
    max-width: 80%;
    padding: 8px;
    word-wrap: break-word;
    margin-top: 16px;
    border-radius: 4px;
  }

  .dialog-item-me {
    justify-content: flex-end;
  }

  .dialog-item-me .dialog-item-main {
    background-color: antiquewhite;
  }

<<<<<<< HEAD
  .dialog-item-ai .dialog-item-main {
    background-color: #eee;
  }

  .logo {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
</style>
=======
.dialog-item-ai .dialog-item-main {
  background-color: #eee;
}
.logo {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
</style>
