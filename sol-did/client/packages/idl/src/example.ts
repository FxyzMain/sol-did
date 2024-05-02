/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/example.json`.
 */
export type Example = {
  "address": "exCJEJeiWNbq13aZaaYVyeWXQ5hjj3r6fn4GtceoR9f",
  "metadata": {
    "name": "example",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addService",
      "discriminator": [
        133,
        207,
        106,
        32,
        91,
        111,
        153,
        30
      ],
      "accounts": [
        {
          "name": "didData",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "solDidProgram",
          "address": "didso1Dpqpm4CsiCjzP766BGY89CAdD6ZBL68cRhFPc"
        }
      ],
      "args": [
        {
          "name": "fragment",
          "type": "string"
        },
        {
          "name": "serviceType",
          "type": "string"
        },
        {
          "name": "serviceEndpoint",
          "type": "string"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "didData",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "solDidProgram",
          "address": "didso1Dpqpm4CsiCjzP766BGY89CAdD6ZBL68cRhFPc"
        }
      ],
      "args": [
        {
          "name": "size",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "didAccount",
      "discriminator": [
        77,
        88,
        239,
        141,
        251,
        29,
        237,
        243
      ]
    }
  ],
  "types": [
    {
      "name": "didAccount",
      "docs": [
        "Account: DidAccount"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "initialVerificationMethod",
            "type": {
              "defined": {
                "name": "verificationMethod"
              }
            }
          },
          {
            "name": "verificationMethods",
            "type": {
              "vec": {
                "defined": {
                  "name": "verificationMethod"
                }
              }
            }
          },
          {
            "name": "services",
            "type": {
              "vec": {
                "defined": {
                  "name": "service"
                }
              }
            }
          },
          {
            "name": "nativeControllers",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "otherControllers",
            "type": {
              "vec": "string"
            }
          }
        ]
      }
    },
    {
      "name": "service",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fragment",
            "type": "string"
          },
          {
            "name": "serviceType",
            "type": "string"
          },
          {
            "name": "serviceEndpoint",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "verificationMethod",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fragment",
            "type": "string"
          },
          {
            "name": "flags",
            "type": "u16"
          },
          {
            "name": "methodType",
            "type": "u8"
          },
          {
            "name": "keyData",
            "type": "bytes"
          }
        ]
      }
    }
  ]
};
