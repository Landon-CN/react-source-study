/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 */

import type {ReactFabricHostComponent} from './ReactFabricPublicInstance';
import {getNodeFromInternalInstanceHandle} from './ReactNativePublicCompat';

/**
 * IMPORTANT: This module is used in Paper and Fabric. It needs to be defined
 * outside of `ReactFabricPublicInstance` because that module requires
 * `nativeFabricUIManager` to be defined in the global scope (which does not
 * happen in Paper).
 */

export function getNativeTagFromPublicInstance(
  publicInstance: ReactFabricHostComponent,
): number {
  return publicInstance.__nativeTag;
}

export function getNodeFromPublicInstance(
  publicInstance: ReactFabricHostComponent,
): mixed {
  if (publicInstance.__internalInstanceHandle == null) {
    return null;
  }

  return getNodeFromInternalInstanceHandle(
    publicInstance.__internalInstanceHandle,
  );
}
