"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const subtract = require("../src/subtract");
test("subtract subtracts", () => { assert.equal(subtract(9, 4), 5); });
