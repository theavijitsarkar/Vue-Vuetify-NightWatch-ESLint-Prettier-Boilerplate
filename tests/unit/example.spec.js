import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Login from "@/views/login.vue";

describe("login.vue", () => {
  it("renders alert when passed", () => {
    const wrapper = shallowMount(Login, {
      propsData: { logginSuccess : true }
    });
    expect(wrapper.text()).to.include("sucess");
  });
});
