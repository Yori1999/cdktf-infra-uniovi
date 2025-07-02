# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlpineBasic <a name="AlpineBasic" id="cdktf-infra-uniovi.AlpineBasic"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.AlpineBasic.Initializer"></a>

```typescript
import { AlpineBasic } from 'cdktf-infra-uniovi'

new AlpineBasic(scope: Construct, id: string, version: AlpineVersion, machineProps: BasicMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.AlpineVersion">AlpineVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.AlpineVersion">AlpineVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.AlpineBasic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.AlpineBasic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.AlpineBasic.isConstruct"></a>

```typescript
import { AlpineBasic } from 'cdktf-infra-uniovi'

AlpineBasic.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.AlpineBasic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.AlpineBasic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.AlpineBasic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ApacheServer <a name="ApacheServer" id="cdktf-infra-uniovi.ApacheServer"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.ApacheServer.Initializer"></a>

```typescript
import { ApacheServer } from 'cdktf-infra-uniovi'

new ApacheServer(scope: Construct, id: string, version: ApacheVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.ApacheServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.ApacheServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.ApacheServer.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.ApacheServer.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.ApacheServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.ApacheServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.ApacheServer.isConstruct"></a>

```typescript
import { ApacheServer } from 'cdktf-infra-uniovi'

ApacheServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.ApacheServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.ApacheServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ApacheServerBase <a name="ApacheServerBase" id="cdktf-infra-uniovi.ApacheServerBase"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.ApacheServerBase.Initializer"></a>

```typescript
import { ApacheServerBase } from 'cdktf-infra-uniovi'

new ApacheServerBase(scope: Construct, id: string, version: ApacheVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.ApacheServerBase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.ApacheServerBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.ApacheServerBase.isConstruct"></a>

```typescript
import { ApacheServerBase } from 'cdktf-infra-uniovi'

ApacheServerBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.ApacheServerBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheServerBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.ApacheServerBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### DebianBasic <a name="DebianBasic" id="cdktf-infra-uniovi.DebianBasic"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.DebianBasic.Initializer"></a>

```typescript
import { DebianBasic } from 'cdktf-infra-uniovi'

new DebianBasic(scope: Construct, id: string, version: DebianVersion, machineProps: BasicMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.DebianVersion">DebianVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DebianBasic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DebianBasic.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.DebianBasic.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.DebianVersion">DebianVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.DebianBasic.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.DebianBasic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.DebianBasic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.DebianBasic.isConstruct"></a>

```typescript
import { DebianBasic } from 'cdktf-infra-uniovi'

DebianBasic.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.DebianBasic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.DebianBasic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.DebianBasic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### UbuntuBase <a name="UbuntuBase" id="cdktf-infra-uniovi.UbuntuBase"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.UbuntuBase.Initializer"></a>

```typescript
import { UbuntuBase } from 'cdktf-infra-uniovi'

new UbuntuBase(scope: Construct, id: string, version: UbuntuVersion, machineProps: BasicMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.UbuntuBase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.UbuntuBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.UbuntuBase.isConstruct"></a>

```typescript
import { UbuntuBase } from 'cdktf-infra-uniovi'

UbuntuBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.UbuntuBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.UbuntuBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### UbuntuBasic <a name="UbuntuBasic" id="cdktf-infra-uniovi.UbuntuBasic"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.UbuntuBasic.Initializer"></a>

```typescript
import { UbuntuBasic } from 'cdktf-infra-uniovi'

new UbuntuBasic(scope: Construct, id: string, version: UbuntuVersion, machineProps: BasicMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.UbuntuBasic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.UbuntuBasic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.UbuntuBasic.isConstruct"></a>

```typescript
import { UbuntuBasic } from 'cdktf-infra-uniovi'

UbuntuBasic.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.UbuntuBasic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuBasic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.UbuntuBasic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AwsServerProps <a name="AwsServerProps" id="cdktf-infra-uniovi.AwsServerProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.AwsServerProps.Initializer"></a>

```typescript
import { AwsServerProps } from 'cdktf-infra-uniovi'

const awsServerProps: AwsServerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.AwsServerProps.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Security Group ID to associate with the machine. |
| <code><a href="#cdktf-infra-uniovi.AwsServerProps.property.subnetId">subnetId</a></code> | <code>string</code> | Subnet ID where the machine will be deployed. |
| <code><a href="#cdktf-infra-uniovi.AwsServerProps.property.usePersistence">usePersistence</a></code> | <code>boolean</code> | Whether to use persistence for the machine. |
| <code><a href="#cdktf-infra-uniovi.AwsServerProps.property.vpcId">vpcId</a></code> | <code>string</code> | Virtual Private Cloud (VPC) ID where the machine will be deployed. |
| <code><a href="#cdktf-infra-uniovi.AwsServerProps.property.securityGroupIngressRules">securityGroupIngressRules</a></code> | <code>@cdktf/provider-aws.securityGroup.SecurityGroupIngress[]</code> | An optional list of security group ingress rules to apply to the server. |

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="cdktf-infra-uniovi.AwsServerProps.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Security Group ID to associate with the machine.

This is an optional property, and if not specified, a newly created security group will be used.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="cdktf-infra-uniovi.AwsServerProps.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Subnet ID where the machine will be deployed.

This is an optional property, and if not specified, the default subnet will be used.
If you specify a VPC, you must also specify a subnet within that VPC.

---

##### `usePersistence`<sup>Optional</sup> <a name="usePersistence" id="cdktf-infra-uniovi.AwsServerProps.property.usePersistence"></a>

```typescript
public readonly usePersistence: boolean;
```

- *Type:* boolean

Whether to use persistence for the machine.

This is an optional property, and if not specified, it defaults to false.
If set to true, the machine will be configured to use persistent storage, using an EBS volume for AWS.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="cdktf-infra-uniovi.AwsServerProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Virtual Private Cloud (VPC) ID where the machine will be deployed.

This is an optional property, and if not specified, the default VPC will be used.

---

##### `securityGroupIngressRules`<sup>Optional</sup> <a name="securityGroupIngressRules" id="cdktf-infra-uniovi.AwsServerProps.property.securityGroupIngressRules"></a>

```typescript
public readonly securityGroupIngressRules: SecurityGroupIngress[];
```

- *Type:* @cdktf/provider-aws.securityGroup.SecurityGroupIngress[]

An optional list of security group ingress rules to apply to the server.

This property allows you to define specific rules for inbound traffic to the server.
Each rule must follow the `SecurityGroupIngress` schema.

---

### BaseInfrastructureComponentProps <a name="BaseInfrastructureComponentProps" id="cdktf-infra-uniovi.BaseInfrastructureComponentProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.BaseInfrastructureComponentProps.Initializer"></a>

```typescript
import { BaseInfrastructureComponentProps } from 'cdktf-infra-uniovi'

const baseInfrastructureComponentProps: BaseInfrastructureComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.BaseInfrastructureComponentProps.property.providerType">providerType</a></code> | <code><a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a></code> | The provider type for the infrastructure component. |

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.BaseInfrastructureComponentProps.property.providerType"></a>

```typescript
public readonly providerType: ProviderType;
```

- *Type:* <a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a>

The provider type for the infrastructure component.

This property is used to determine which cloud provider the component will be deployed on.
It is a mandatory property and must be one of the supported provider types.

---

*Example*

```typescript
ProviderType.Docker
```


### BasicAWSMachineComponentProps <a name="BasicAWSMachineComponentProps" id="cdktf-infra-uniovi.BasicAWSMachineComponentProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.BasicAWSMachineComponentProps.Initializer"></a>

```typescript
import { BasicAWSMachineComponentProps } from 'cdktf-infra-uniovi'

const basicAWSMachineComponentProps: BasicAWSMachineComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Security Group ID to associate with the machine. |
| <code><a href="#cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.subnetId">subnetId</a></code> | <code>string</code> | Subnet ID where the machine will be deployed. |
| <code><a href="#cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.usePersistence">usePersistence</a></code> | <code>boolean</code> | Whether to use persistence for the machine. |
| <code><a href="#cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.vpcId">vpcId</a></code> | <code>string</code> | Virtual Private Cloud (VPC) ID where the machine will be deployed. |

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Security Group ID to associate with the machine.

This is an optional property, and if not specified, a newly created security group will be used.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Subnet ID where the machine will be deployed.

This is an optional property, and if not specified, the default subnet will be used.
If you specify a VPC, you must also specify a subnet within that VPC.

---

##### `usePersistence`<sup>Optional</sup> <a name="usePersistence" id="cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.usePersistence"></a>

```typescript
public readonly usePersistence: boolean;
```

- *Type:* boolean

Whether to use persistence for the machine.

This is an optional property, and if not specified, it defaults to false.
If set to true, the machine will be configured to use persistent storage, using an EBS volume for AWS.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="cdktf-infra-uniovi.BasicAWSMachineComponentProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Virtual Private Cloud (VPC) ID where the machine will be deployed.

This is an optional property, and if not specified, the default VPC will be used.

---

### BasicDockerMachineComponentProps <a name="BasicDockerMachineComponentProps" id="cdktf-infra-uniovi.BasicDockerMachineComponentProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.BasicDockerMachineComponentProps.Initializer"></a>

```typescript
import { BasicDockerMachineComponentProps } from 'cdktf-infra-uniovi'

const basicDockerMachineComponentProps: BasicDockerMachineComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.containerName">containerName</a></code> | <code>string</code> | The custom name or identifier for the Docker container. |
| <code><a href="#cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.networks">networks</a></code> | <code>@cdktf/provider-docker.container.ContainerNetworksAdvanced[]</code> | Networks for the Docker container. |
| <code><a href="#cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.useVolume">useVolume</a></code> | <code>boolean</code> | Whether you want to use a volume for the container or not; |
| <code><a href="#cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.volumes">volumes</a></code> | <code>@cdktf/provider-docker.container.ContainerVolumes[]</code> | List of volumes to use for the container, following Docker's `ContainerVolumes` schema. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The custom name or identifier for the Docker container.

This is the name that will be used to reference the container in the Docker environment.
No matter the value you pass, it will be normalized to ensure it is valid for Docker.

---

*Example*

```typescript
"my-docker-container"
```


##### `networks`<sup>Optional</sup> <a name="networks" id="cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.networks"></a>

```typescript
public readonly networks: ContainerNetworksAdvanced[];
```

- *Type:* @cdktf/provider-docker.container.ContainerNetworksAdvanced[]

Networks for the Docker container.

This is an advanced property that allows you to specify multiple networks for the container.
Each network must follow Docker's `ContainerNetworksAdvanced` schema.

---

##### `useVolume`<sup>Optional</sup> <a name="useVolume" id="cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.useVolume"></a>

```typescript
public readonly useVolume: boolean;
```

- *Type:* boolean

Whether you want to use a volume for the container or not;

if not specified, it defaults to false.
If set to true, you can optionally specify `volumes` to define the volumes to use.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="cdktf-infra-uniovi.BasicDockerMachineComponentProps.property.volumes"></a>

```typescript
public readonly volumes: ContainerVolumes[];
```

- *Type:* @cdktf/provider-docker.container.ContainerVolumes[]

List of volumes to use for the container, following Docker's `ContainerVolumes` schema.

Each volume must have a mandatory `containerPath`
If `useVolume` is true, this property's value will be used to define the volumes for the container.
If not specified, internally a default volume will be created.

---

### BasicMachineComponentPropsInterface <a name="BasicMachineComponentPropsInterface" id="cdktf-infra-uniovi.BasicMachineComponentPropsInterface"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.BasicMachineComponentPropsInterface.Initializer"></a>

```typescript
import { BasicMachineComponentPropsInterface } from 'cdktf-infra-uniovi'

const basicMachineComponentPropsInterface: BasicMachineComponentPropsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface.property.providerType">providerType</a></code> | <code><a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a></code> | The provider type for the infrastructure component. |
| <code><a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface.property.awsProps">awsProps</a></code> | <code><a href="#cdktf-infra-uniovi.BasicAWSMachineComponentProps">BasicAWSMachineComponentProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface.property.dockerProps">dockerProps</a></code> | <code><a href="#cdktf-infra-uniovi.BasicDockerMachineComponentProps">BasicDockerMachineComponentProps</a></code> | *No description.* |

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.BasicMachineComponentPropsInterface.property.providerType"></a>

```typescript
public readonly providerType: ProviderType;
```

- *Type:* <a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a>

The provider type for the infrastructure component.

This property is used to determine which cloud provider the component will be deployed on.
It is a mandatory property and must be one of the supported provider types.

---

*Example*

```typescript
ProviderType.Docker
```


##### `awsProps`<sup>Optional</sup> <a name="awsProps" id="cdktf-infra-uniovi.BasicMachineComponentPropsInterface.property.awsProps"></a>

```typescript
public readonly awsProps: BasicAWSMachineComponentProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.BasicAWSMachineComponentProps">BasicAWSMachineComponentProps</a>

---

##### `dockerProps`<sup>Optional</sup> <a name="dockerProps" id="cdktf-infra-uniovi.BasicMachineComponentPropsInterface.property.dockerProps"></a>

```typescript
public readonly dockerProps: BasicDockerMachineComponentProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.BasicDockerMachineComponentProps">BasicDockerMachineComponentProps</a>

---

### DockerServerProps <a name="DockerServerProps" id="cdktf-infra-uniovi.DockerServerProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.DockerServerProps.Initializer"></a>

```typescript
import { DockerServerProps } from 'cdktf-infra-uniovi'

const dockerServerProps: DockerServerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.DockerServerProps.property.containerName">containerName</a></code> | <code>string</code> | The custom name or identifier for the Docker container. |
| <code><a href="#cdktf-infra-uniovi.DockerServerProps.property.networks">networks</a></code> | <code>@cdktf/provider-docker.container.ContainerNetworksAdvanced[]</code> | Networks for the Docker container. |
| <code><a href="#cdktf-infra-uniovi.DockerServerProps.property.useVolume">useVolume</a></code> | <code>boolean</code> | Whether you want to use a volume for the container or not; |
| <code><a href="#cdktf-infra-uniovi.DockerServerProps.property.volumes">volumes</a></code> | <code>@cdktf/provider-docker.container.ContainerVolumes[]</code> | List of volumes to use for the container, following Docker's `ContainerVolumes` schema. |
| <code><a href="#cdktf-infra-uniovi.DockerServerProps.property.ports">ports</a></code> | <code>@cdktf/provider-docker.container.ContainerPorts[]</code> | An optional list of ports to expose from the container, following Docker's `ContainerPorts` schema. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="cdktf-infra-uniovi.DockerServerProps.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The custom name or identifier for the Docker container.

This is the name that will be used to reference the container in the Docker environment.
No matter the value you pass, it will be normalized to ensure it is valid for Docker.

---

*Example*

```typescript
"my-docker-container"
```


##### `networks`<sup>Optional</sup> <a name="networks" id="cdktf-infra-uniovi.DockerServerProps.property.networks"></a>

```typescript
public readonly networks: ContainerNetworksAdvanced[];
```

- *Type:* @cdktf/provider-docker.container.ContainerNetworksAdvanced[]

Networks for the Docker container.

This is an advanced property that allows you to specify multiple networks for the container.
Each network must follow Docker's `ContainerNetworksAdvanced` schema.

---

##### `useVolume`<sup>Optional</sup> <a name="useVolume" id="cdktf-infra-uniovi.DockerServerProps.property.useVolume"></a>

```typescript
public readonly useVolume: boolean;
```

- *Type:* boolean

Whether you want to use a volume for the container or not;

if not specified, it defaults to false.
If set to true, you can optionally specify `volumes` to define the volumes to use.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="cdktf-infra-uniovi.DockerServerProps.property.volumes"></a>

```typescript
public readonly volumes: ContainerVolumes[];
```

- *Type:* @cdktf/provider-docker.container.ContainerVolumes[]

List of volumes to use for the container, following Docker's `ContainerVolumes` schema.

Each volume must have a mandatory `containerPath`
If `useVolume` is true, this property's value will be used to define the volumes for the container.
If not specified, internally a default volume will be created.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="cdktf-infra-uniovi.DockerServerProps.property.ports"></a>

```typescript
public readonly ports: ContainerPorts[];
```

- *Type:* @cdktf/provider-docker.container.ContainerPorts[]

An optional list of ports to expose from the container, following Docker's `ContainerPorts` schema.

Each port must have an internal value, external is optional (if not present, Docker will choose a random port).

---

### InternalAWSMachineComponentProps <a name="InternalAWSMachineComponentProps" id="cdktf-infra-uniovi.InternalAWSMachineComponentProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.InternalAWSMachineComponentProps.Initializer"></a>

```typescript
import { InternalAWSMachineComponentProps } from 'cdktf-infra-uniovi'

const internalAWSMachineComponentProps: InternalAWSMachineComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.InternalAWSMachineComponentProps.property.ami">ami</a></code> | <code>string</code> | The Amazon Machine Image (AMI) ID to use for the machine. |
| <code><a href="#cdktf-infra-uniovi.InternalAWSMachineComponentProps.property.additionalSecurityGroupIngressRules">additionalSecurityGroupIngressRules</a></code> | <code>@cdktf/provider-aws.securityGroup.SecurityGroupIngress[]</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InternalAWSMachineComponentProps.property.customInitScriptPath">customInitScriptPath</a></code> | <code>string</code> | *No description.* |

---

##### `ami`<sup>Required</sup> <a name="ami" id="cdktf-infra-uniovi.InternalAWSMachineComponentProps.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

The Amazon Machine Image (AMI) ID to use for the machine.

This is a mandatory property and must be one of the supported AMIs; however, its value should come from picking the corresponding
AMI from the supported images list, by choosing the appropriate combination of provider type and image version.

---

##### `additionalSecurityGroupIngressRules`<sup>Optional</sup> <a name="additionalSecurityGroupIngressRules" id="cdktf-infra-uniovi.InternalAWSMachineComponentProps.property.additionalSecurityGroupIngressRules"></a>

```typescript
public readonly additionalSecurityGroupIngressRules: SecurityGroupIngress[];
```

- *Type:* @cdktf/provider-aws.securityGroup.SecurityGroupIngress[]

---

##### `customInitScriptPath`<sup>Optional</sup> <a name="customInitScriptPath" id="cdktf-infra-uniovi.InternalAWSMachineComponentProps.property.customInitScriptPath"></a>

```typescript
public readonly customInitScriptPath: string;
```

- *Type:* string

---

### InternalDockerMachineComponentProps <a name="InternalDockerMachineComponentProps" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.Initializer"></a>

```typescript
import { InternalDockerMachineComponentProps } from 'cdktf-infra-uniovi'

const internalDockerMachineComponentProps: InternalDockerMachineComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.imageName">imageName</a></code> | <code>string</code> | The name of the Docker image to use for the machine. |
| <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.additionalPorts">additionalPorts</a></code> | <code>@cdktf/provider-docker.container.ContainerPorts[]</code> | We may need to pass specific ports for certain use cases in case the user doesn't pass them. |
| <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.buildArgs">buildArgs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.customCommand">customCommand</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.customImageName">customImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.dockerfilePath">dockerfilePath</a></code> | <code>string</code> | A custom Dockerfile path to build the image from, in case we need to build a custom image. |
| <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.volumeContainerPath">volumeContainerPath</a></code> | <code>string</code> | *No description.* |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The name of the Docker image to use for the machine.

This is a mandatory property and must be one of the supported Docker images; however, it's value should come from picking the corresponding
image from the supported images list, by choosing the appropriate combination of provider type and image version.
It is used to ensure that the machine is created with a specific image, instead of allowing the user to pass any arbitrary image name that may not
exist or be supported.

---

*Example*

```typescript
"ubuntu:latest"
```


##### `additionalPorts`<sup>Optional</sup> <a name="additionalPorts" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.additionalPorts"></a>

```typescript
public readonly additionalPorts: ContainerPorts[];
```

- *Type:* @cdktf/provider-docker.container.ContainerPorts[]

We may need to pass specific ports for certain use cases in case the user doesn't pass them.

We cannot rely on the user to pass them, and we shouldn't overflow the user-facing interfaces with too
many fields when some are "mandatory" but only for specific machines

---

##### `buildArgs`<sup>Optional</sup> <a name="buildArgs" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.buildArgs"></a>

```typescript
public readonly buildArgs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customCommand`<sup>Optional</sup> <a name="customCommand" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.customCommand"></a>

```typescript
public readonly customCommand: string[];
```

- *Type:* string[]

---

##### `customImageName`<sup>Optional</sup> <a name="customImageName" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.customImageName"></a>

```typescript
public readonly customImageName: string;
```

- *Type:* string

---

##### `dockerfilePath`<sup>Optional</sup> <a name="dockerfilePath" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.dockerfilePath"></a>

```typescript
public readonly dockerfilePath: string;
```

- *Type:* string

A custom Dockerfile path to build the image from, in case we need to build a custom image.

This is an optional property, and if not specified, no specific Dockerfile will be used. However, you should be careful not to pass a `customImageName` in those cases.

---

##### `volumeContainerPath`<sup>Optional</sup> <a name="volumeContainerPath" id="cdktf-infra-uniovi.InternalDockerMachineComponentProps.property.volumeContainerPath"></a>

```typescript
public readonly volumeContainerPath: string;
```

- *Type:* string

---

### InternalMachineComponentPropsInterface <a name="InternalMachineComponentPropsInterface" id="cdktf-infra-uniovi.InternalMachineComponentPropsInterface"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.InternalMachineComponentPropsInterface.Initializer"></a>

```typescript
import { InternalMachineComponentPropsInterface } from 'cdktf-infra-uniovi'

const internalMachineComponentPropsInterface: InternalMachineComponentPropsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface.property.awsProps">awsProps</a></code> | <code><a href="#cdktf-infra-uniovi.InternalAWSMachineComponentProps">InternalAWSMachineComponentProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface.property.dockerProps">dockerProps</a></code> | <code><a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps">InternalDockerMachineComponentProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface.property.ubuntuProToken">ubuntuProToken</a></code> | <code>string</code> | Ubuntu Pro subscription token used to attach the instance. |

---

##### `awsProps`<sup>Optional</sup> <a name="awsProps" id="cdktf-infra-uniovi.InternalMachineComponentPropsInterface.property.awsProps"></a>

```typescript
public readonly awsProps: InternalAWSMachineComponentProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.InternalAWSMachineComponentProps">InternalAWSMachineComponentProps</a>

---

##### `dockerProps`<sup>Optional</sup> <a name="dockerProps" id="cdktf-infra-uniovi.InternalMachineComponentPropsInterface.property.dockerProps"></a>

```typescript
public readonly dockerProps: InternalDockerMachineComponentProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.InternalDockerMachineComponentProps">InternalDockerMachineComponentProps</a>

---

##### `ubuntuProToken`<sup>Optional</sup> <a name="ubuntuProToken" id="cdktf-infra-uniovi.InternalMachineComponentPropsInterface.property.ubuntuProToken"></a>

```typescript
public readonly ubuntuProToken: string;
```

- *Type:* string

Ubuntu Pro subscription token used to attach the instance.

---

### ServerPropsInterface <a name="ServerPropsInterface" id="cdktf-infra-uniovi.ServerPropsInterface"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.ServerPropsInterface.Initializer"></a>

```typescript
import { ServerPropsInterface } from 'cdktf-infra-uniovi'

const serverPropsInterface: ServerPropsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.ServerPropsInterface.property.providerType">providerType</a></code> | <code><a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a></code> | The provider type for the infrastructure component. |
| <code><a href="#cdktf-infra-uniovi.ServerPropsInterface.property.awsProps">awsProps</a></code> | <code><a href="#cdktf-infra-uniovi.AwsServerProps">AwsServerProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ServerPropsInterface.property.dockerProps">dockerProps</a></code> | <code><a href="#cdktf-infra-uniovi.DockerServerProps">DockerServerProps</a></code> | *No description.* |

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.ServerPropsInterface.property.providerType"></a>

```typescript
public readonly providerType: ProviderType;
```

- *Type:* <a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a>

The provider type for the infrastructure component.

This property is used to determine which cloud provider the component will be deployed on.
It is a mandatory property and must be one of the supported provider types.

---

*Example*

```typescript
ProviderType.Docker
```


##### `awsProps`<sup>Optional</sup> <a name="awsProps" id="cdktf-infra-uniovi.ServerPropsInterface.property.awsProps"></a>

```typescript
public readonly awsProps: AwsServerProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.AwsServerProps">AwsServerProps</a>

---

##### `dockerProps`<sup>Optional</sup> <a name="dockerProps" id="cdktf-infra-uniovi.ServerPropsInterface.property.dockerProps"></a>

```typescript
public readonly dockerProps: DockerServerProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.DockerServerProps">DockerServerProps</a>

---

## Classes <a name="Classes" id="Classes"></a>

### AwsDeployStrategy <a name="AwsDeployStrategy" id="cdktf-infra-uniovi.AwsDeployStrategy"></a>

- *Implements:* <a href="#cdktf-infra-uniovi.IDeployStrategy">IDeployStrategy</a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.AwsDeployStrategy.Initializer"></a>

```typescript
import { AwsDeployStrategy } from 'cdktf-infra-uniovi'

new AwsDeployStrategy()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine">deployBasicMachine</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer">deployBasicServer</a></code> | *No description.* |

---

##### `deployBasicMachine` <a name="deployBasicMachine" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine"></a>

```typescript
public deployBasicMachine(scope: Construct, id: string, props: BasicMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---

##### `deployBasicServer` <a name="deployBasicServer" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer"></a>

```typescript
public deployBasicServer(scope: Construct, id: string, props: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---




### DockerDeployStrategy <a name="DockerDeployStrategy" id="cdktf-infra-uniovi.DockerDeployStrategy"></a>

- *Implements:* <a href="#cdktf-infra-uniovi.IDeployStrategy">IDeployStrategy</a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.DockerDeployStrategy.Initializer"></a>

```typescript
import { DockerDeployStrategy } from 'cdktf-infra-uniovi'

new DockerDeployStrategy()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine">deployBasicMachine</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer">deployBasicServer</a></code> | *No description.* |

---

##### `deployBasicMachine` <a name="deployBasicMachine" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine"></a>

```typescript
public deployBasicMachine(scope: Construct, id: string, basicMachineProps: BasicMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.id"></a>

- *Type:* string

---

###### `basicMachineProps`<sup>Required</sup> <a name="basicMachineProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.basicMachineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---

##### `deployBasicServer` <a name="deployBasicServer" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer"></a>

```typescript
public deployBasicServer(scope: Construct, id: string, serverProps: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.id"></a>

- *Type:* string

---

###### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---




### ProviderDeployStrategyFactory <a name="ProviderDeployStrategyFactory" id="cdktf-infra-uniovi.ProviderDeployStrategyFactory"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ProviderDeployStrategyFactory.getProviderDeployStrategy">getProviderDeployStrategy</a></code> | *No description.* |

---

##### `getProviderDeployStrategy` <a name="getProviderDeployStrategy" id="cdktf-infra-uniovi.ProviderDeployStrategyFactory.getProviderDeployStrategy"></a>

```typescript
import { ProviderDeployStrategyFactory } from 'cdktf-infra-uniovi'

ProviderDeployStrategyFactory.getProviderDeployStrategy(providerType: ProviderType)
```

###### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.ProviderDeployStrategyFactory.getProviderDeployStrategy.parameter.providerType"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a>

---



### SingletonProviderFactory <a name="SingletonProviderFactory" id="cdktf-infra-uniovi.SingletonProviderFactory"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.SingletonProviderFactory.getProvider">getProvider</a></code> | *No description.* |

---

##### `getProvider` <a name="getProvider" id="cdktf-infra-uniovi.SingletonProviderFactory.getProvider"></a>

```typescript
import { SingletonProviderFactory } from 'cdktf-infra-uniovi'

SingletonProviderFactory.getProvider(providerType: ProviderType, scope: Construct, existingProvider?: TerraformProvider)
```

###### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.SingletonProviderFactory.getProvider.parameter.providerType"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a>

---

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.SingletonProviderFactory.getProvider.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `existingProvider`<sup>Optional</sup> <a name="existingProvider" id="cdktf-infra-uniovi.SingletonProviderFactory.getProvider.parameter.existingProvider"></a>

- *Type:* cdktf.TerraformProvider

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IDeployStrategy <a name="IDeployStrategy" id="cdktf-infra-uniovi.IDeployStrategy"></a>

- *Implemented By:* <a href="#cdktf-infra-uniovi.AwsDeployStrategy">AwsDeployStrategy</a>, <a href="#cdktf-infra-uniovi.DockerDeployStrategy">DockerDeployStrategy</a>, <a href="#cdktf-infra-uniovi.IDeployStrategy">IDeployStrategy</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.IDeployStrategy.deployBasicMachine">deployBasicMachine</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.IDeployStrategy.deployBasicServer">deployBasicServer</a></code> | *No description.* |

---

##### `deployBasicMachine` <a name="deployBasicMachine" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicMachine"></a>

```typescript
public deployBasicMachine(scope: Construct, id: string, props: BasicMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicMachine.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicMachine.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicMachine.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---

##### `deployBasicServer` <a name="deployBasicServer" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicServer"></a>

```typescript
public deployBasicServer(scope: Construct, id: string, props: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicServer.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicServer.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicServer.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.IDeployStrategy.deployBasicServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---


## Enums <a name="Enums" id="Enums"></a>

### AlpineVersion <a name="AlpineVersion" id="cdktf-infra-uniovi.AlpineVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.AlpineVersion.LATEST">LATEST</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.AlpineVersion.LATEST"></a>

---


### ApacheVersion <a name="ApacheVersion" id="cdktf-infra-uniovi.ApacheVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApacheVersion.LATEST">LATEST</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheVersion.APACHE_DEBIAN">APACHE_DEBIAN</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApacheVersion.APACHE_ALPINE">APACHE_ALPINE</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.ApacheVersion.LATEST"></a>

---


##### `APACHE_DEBIAN` <a name="APACHE_DEBIAN" id="cdktf-infra-uniovi.ApacheVersion.APACHE_DEBIAN"></a>

---


##### `APACHE_ALPINE` <a name="APACHE_ALPINE" id="cdktf-infra-uniovi.ApacheVersion.APACHE_ALPINE"></a>

---


### DebianVersion <a name="DebianVersion" id="cdktf-infra-uniovi.DebianVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.DebianVersion.LATEST">LATEST</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DebianVersion.DEBIAN_12">DEBIAN_12</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DebianVersion.DEBIAN_11">DEBIAN_11</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.DebianVersion.LATEST"></a>

---


##### `DEBIAN_12` <a name="DEBIAN_12" id="cdktf-infra-uniovi.DebianVersion.DEBIAN_12"></a>

---


##### `DEBIAN_11` <a name="DEBIAN_11" id="cdktf-infra-uniovi.DebianVersion.DEBIAN_11"></a>

---


### NginxVersion <a name="NginxVersion" id="cdktf-infra-uniovi.NginxVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxVersion.LATEST">LATEST</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.NginxVersion.LATEST"></a>

---


### ProviderType <a name="ProviderType" id="cdktf-infra-uniovi.ProviderType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ProviderType.DOCKER">DOCKER</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ProviderType.AWS">AWS</a></code> | *No description.* |

---

##### `DOCKER` <a name="DOCKER" id="cdktf-infra-uniovi.ProviderType.DOCKER"></a>

---


##### `AWS` <a name="AWS" id="cdktf-infra-uniovi.ProviderType.AWS"></a>

---


### UbuntuVersion <a name="UbuntuVersion" id="cdktf-infra-uniovi.UbuntuVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuVersion.LATEST">LATEST</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuVersion.UBUNTU_18">UBUNTU_18</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuVersion.UBUNTU_20">UBUNTU_20</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuVersion.UBUNTU_22">UBUNTU_22</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuVersion.UBUNTU_24">UBUNTU_24</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.UbuntuVersion.LATEST"></a>

---


##### `UBUNTU_18` <a name="UBUNTU_18" id="cdktf-infra-uniovi.UbuntuVersion.UBUNTU_18"></a>

---


##### `UBUNTU_20` <a name="UBUNTU_20" id="cdktf-infra-uniovi.UbuntuVersion.UBUNTU_20"></a>

---


##### `UBUNTU_22` <a name="UBUNTU_22" id="cdktf-infra-uniovi.UbuntuVersion.UBUNTU_22"></a>

---


##### `UBUNTU_24` <a name="UBUNTU_24" id="cdktf-infra-uniovi.UbuntuVersion.UBUNTU_24"></a>

---

