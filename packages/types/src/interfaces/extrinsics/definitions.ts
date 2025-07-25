// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

export default {
  rpc: {},
  types: {
    Extrinsic: 'GenericExtrinsic',
    ExtrinsicEra: 'GenericExtrinsicEra',
    ExtrinsicPayload: 'GenericExtrinsicPayload',
    ExtrinsicSignature: 'MultiSignature',
    ExtrinsicV4: 'GenericExtrinsicV4',
    ExtrinsicPayloadV4: 'GenericExtrinsicPayloadV4',
    ExtrinsicSignatureV4: 'GenericExtrinsicSignatureV4',
    ExtrinsicUnknown: 'GenericExtrinsicUnknown',
    ExtrinsicPayloadUnknown: 'GenericExtrinsicPayloadUnknown',
    ExtrinsicV5: 'GenericExtrinsicV5',
    ExtrinsicPayloadV5: 'GenericExtrinsicPayloadV5',
    ExtrinsicSignatureV5: 'GenericExtrinsicSignatureV5',

    // eras
    Era: 'ExtrinsicEra',
    ImmortalEra: 'GenericImmortalEra',
    MortalEra: 'GenericMortalEra',

    // signatures & signer
    AnySignature: 'H512',
    MultiSignature: {
      _enum: {
        Ed25519: 'Ed25519Signature',
        Sr25519: 'Sr25519Signature',
        Ecdsa: 'EcdsaSignature',
        Mldsa44: 'Mldsa44Signature',
        Mldsa65: 'Mldsa65Signature',
        Mldsa87: 'Mldsa87Signature'
      }
    },
    Signature: 'H512',
    SignerPayload: 'GenericSignerPayload',
    EcdsaSignature: '[u8; 65]',
    Ed25519Signature: 'H512',
    Sr25519Signature: 'H512',
    Mldsa44Signature: '[u8; 2420]',
    Mldsa65Signature: '[u8; 3309]',
    Mldsa87Signature: '[u8; 4627]'
  }
} as Definitions;
