// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericExtrinsicPayloadUnknown, GenericExtrinsicPayloadV4, GenericExtrinsicPayloadV5, GenericExtrinsicSignatureV4, GenericExtrinsicSignatureV5, GenericExtrinsicUnknown, GenericExtrinsicV4, GenericExtrinsicV5, GenericImmortalEra, GenericMortalEra, GenericSignerPayload } from '@polkadot/types';
import type { Enum, U8aFixed } from '@polkadot/types-codec';
import type { H512 } from '@polkadot/types/interfaces/runtime';

/** @name AnySignature */
export interface AnySignature extends H512 {}

/** @name EcdsaSignature */
export interface EcdsaSignature extends U8aFixed {}

/** @name Ed25519Signature */
export interface Ed25519Signature extends H512 {}

/** @name Era */
export interface Era extends ExtrinsicEra {}

/** @name Extrinsic */
export interface Extrinsic extends GenericExtrinsic {}

/** @name ExtrinsicEra */
export interface ExtrinsicEra extends GenericExtrinsicEra {}

/** @name ExtrinsicPayload */
export interface ExtrinsicPayload extends GenericExtrinsicPayload {}

/** @name ExtrinsicPayloadUnknown */
export interface ExtrinsicPayloadUnknown extends GenericExtrinsicPayloadUnknown {}

/** @name ExtrinsicPayloadV4 */
export interface ExtrinsicPayloadV4 extends GenericExtrinsicPayloadV4 {}

/** @name ExtrinsicPayloadV5 */
export interface ExtrinsicPayloadV5 extends GenericExtrinsicPayloadV5 {}

/** @name ExtrinsicSignature */
export interface ExtrinsicSignature extends MultiSignature {}

/** @name ExtrinsicSignatureV4 */
export interface ExtrinsicSignatureV4 extends GenericExtrinsicSignatureV4 {}

/** @name ExtrinsicSignatureV5 */
export interface ExtrinsicSignatureV5 extends GenericExtrinsicSignatureV5 {}

/** @name ExtrinsicUnknown */
export interface ExtrinsicUnknown extends GenericExtrinsicUnknown {}

/** @name ExtrinsicV4 */
export interface ExtrinsicV4 extends GenericExtrinsicV4 {}

/** @name ExtrinsicV5 */
export interface ExtrinsicV5 extends GenericExtrinsicV5 {}

/** @name ImmortalEra */
export interface ImmortalEra extends GenericImmortalEra {}

/** @name Mldsa44Signature */
export interface Mldsa44Signature extends U8aFixed {}

/** @name Mldsa65Signature */
export interface Mldsa65Signature extends U8aFixed {}

/** @name Mldsa87Signature */
export interface Mldsa87Signature extends U8aFixed {}

/** @name MortalEra */
export interface MortalEra extends GenericMortalEra {}

/** @name MultiSignature */
export interface MultiSignature extends Enum {
  readonly isEd25519: boolean;
  readonly asEd25519: Ed25519Signature;
  readonly isSr25519: boolean;
  readonly asSr25519: Sr25519Signature;
  readonly isEcdsa: boolean;
  readonly asEcdsa: EcdsaSignature;
  readonly isMldsa44: boolean;
  readonly asMldsa44: Mldsa44Signature;
  readonly isMldsa65: boolean;
  readonly asMldsa65: Mldsa65Signature;
  readonly isMldsa87: boolean;
  readonly asMldsa87: Mldsa87Signature;
  readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa' | 'Mldsa44' | 'Mldsa65' | 'Mldsa87';
}

/** @name Signature */
export interface Signature extends H512 {}

/** @name SignerPayload */
export interface SignerPayload extends GenericSignerPayload {}

/** @name Sr25519Signature */
export interface Sr25519Signature extends H512 {}

export type PHANTOM_EXTRINSICS = 'extrinsics';
