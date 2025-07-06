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


### HardenedApacheServer <a name="HardenedApacheServer" id="cdktf-infra-uniovi.HardenedApacheServer"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.HardenedApacheServer.Initializer"></a>

```typescript
import { HardenedApacheServer } from 'cdktf-infra-uniovi'

new HardenedApacheServer(scope: Construct, id: string, version: ApacheVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.HardenedApacheServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.HardenedApacheServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.HardenedApacheServer.isConstruct"></a>

```typescript
import { HardenedApacheServer } from 'cdktf-infra-uniovi'

HardenedApacheServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.HardenedApacheServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedApacheServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.HardenedApacheServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### HardenedNginxServer <a name="HardenedNginxServer" id="cdktf-infra-uniovi.HardenedNginxServer"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.HardenedNginxServer.Initializer"></a>

```typescript
import { HardenedNginxServer } from 'cdktf-infra-uniovi'

new HardenedNginxServer(scope: Construct, id: string, version: NginxVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.HardenedNginxServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.HardenedNginxServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.HardenedNginxServer.isConstruct"></a>

```typescript
import { HardenedNginxServer } from 'cdktf-infra-uniovi'

HardenedNginxServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.HardenedNginxServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.HardenedNginxServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.HardenedNginxServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### InsecureApacheServer <a name="InsecureApacheServer" id="cdktf-infra-uniovi.InsecureApacheServer"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.InsecureApacheServer.Initializer"></a>

```typescript
import { InsecureApacheServer } from 'cdktf-infra-uniovi'

new InsecureApacheServer(scope: Construct, id: string, version: ApacheVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ApacheVersion">ApacheVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.InsecureApacheServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.InsecureApacheServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.InsecureApacheServer.isConstruct"></a>

```typescript
import { InsecureApacheServer } from 'cdktf-infra-uniovi'

InsecureApacheServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.InsecureApacheServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureApacheServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.InsecureApacheServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### InsecureNginxServer <a name="InsecureNginxServer" id="cdktf-infra-uniovi.InsecureNginxServer"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.InsecureNginxServer.Initializer"></a>

```typescript
import { InsecureNginxServer } from 'cdktf-infra-uniovi'

new InsecureNginxServer(scope: Construct, id: string, version: NginxVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.InsecureNginxServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.InsecureNginxServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.InsecureNginxServer.isConstruct"></a>

```typescript
import { InsecureNginxServer } from 'cdktf-infra-uniovi'

InsecureNginxServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.InsecureNginxServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.InsecureNginxServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.InsecureNginxServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LampBase <a name="LampBase" id="cdktf-infra-uniovi.LampBase"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.LampBase.Initializer"></a>

```typescript
import { LampBase } from 'cdktf-infra-uniovi'

new LampBase(scope: Construct, id: string, stackProps: LampStackPropsInterface)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampBase.Initializer.parameter.stackProps">stackProps</a></code> | <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface">LampStackPropsInterface</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.LampBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.LampBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `stackProps`<sup>Required</sup> <a name="stackProps" id="cdktf-infra-uniovi.LampBase.Initializer.parameter.stackProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.LampStackPropsInterface">LampStackPropsInterface</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.LampBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.LampBase.isConstruct"></a>

```typescript
import { LampBase } from 'cdktf-infra-uniovi'

LampBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.LampBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.LampBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LampStack <a name="LampStack" id="cdktf-infra-uniovi.LampStack"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.LampStack.Initializer"></a>

```typescript
import { LampStack } from 'cdktf-infra-uniovi'

new LampStack(scope: Construct, id: string, stackProps: LampStackPropsInterface)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStack.Initializer.parameter.stackProps">stackProps</a></code> | <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface">LampStackPropsInterface</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.LampStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.LampStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `stackProps`<sup>Required</sup> <a name="stackProps" id="cdktf-infra-uniovi.LampStack.Initializer.parameter.stackProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.LampStackPropsInterface">LampStackPropsInterface</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampStack.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.LampStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.LampStack.isConstruct"></a>

```typescript
import { LampStack } from 'cdktf-infra-uniovi'

LampStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.LampStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.LampStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LempBase <a name="LempBase" id="cdktf-infra-uniovi.LempBase"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.LempBase.Initializer"></a>

```typescript
import { LempBase } from 'cdktf-infra-uniovi'

new LempBase(scope: Construct, id: string, stackProps: LempStackPropsInterface)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempBase.Initializer.parameter.stackProps">stackProps</a></code> | <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface">LempStackPropsInterface</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.LempBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.LempBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `stackProps`<sup>Required</sup> <a name="stackProps" id="cdktf-infra-uniovi.LempBase.Initializer.parameter.stackProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.LempStackPropsInterface">LempStackPropsInterface</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.LempBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.LempBase.isConstruct"></a>

```typescript
import { LempBase } from 'cdktf-infra-uniovi'

LempBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.LempBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.LempBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LempStack <a name="LempStack" id="cdktf-infra-uniovi.LempStack"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.LempStack.Initializer"></a>

```typescript
import { LempStack } from 'cdktf-infra-uniovi'

new LempStack(scope: Construct, id: string, stackProps: LempStackPropsInterface)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStack.Initializer.parameter.stackProps">stackProps</a></code> | <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface">LempStackPropsInterface</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.LempStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.LempStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `stackProps`<sup>Required</sup> <a name="stackProps" id="cdktf-infra-uniovi.LempStack.Initializer.parameter.stackProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.LempStackPropsInterface">LempStackPropsInterface</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempStack.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.LempStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.LempStack.isConstruct"></a>

```typescript
import { LempStack } from 'cdktf-infra-uniovi'

LempStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.LempStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.LempStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NginxServer <a name="NginxServer" id="cdktf-infra-uniovi.NginxServer"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.NginxServer.Initializer"></a>

```typescript
import { NginxServer } from 'cdktf-infra-uniovi'

new NginxServer(scope: Construct, id: string, version: NginxVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServer.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServer.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.NginxServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.NginxServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.NginxServer.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.NginxServer.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.NginxServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.NginxServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.NginxServer.isConstruct"></a>

```typescript
import { NginxServer } from 'cdktf-infra-uniovi'

NginxServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.NginxServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.NginxServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NginxServerBase <a name="NginxServerBase" id="cdktf-infra-uniovi.NginxServerBase"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.NginxServerBase.Initializer"></a>

```typescript
import { NginxServerBase } from 'cdktf-infra-uniovi'

new NginxServerBase(scope: Construct, id: string, version: NginxVersion, serverProps: ServerPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.serverProps">serverProps</a></code> | <code><a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.NginxVersion">NginxVersion</a>

---

##### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.NginxServerBase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.NginxServerBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.NginxServerBase.isConstruct"></a>

```typescript
import { NginxServerBase } from 'cdktf-infra-uniovi'

NginxServerBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.NginxServerBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxServerBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.NginxServerBase.property.node"></a>

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


### UbuntuCustomBase <a name="UbuntuCustomBase" id="cdktf-infra-uniovi.UbuntuCustomBase"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.UbuntuCustomBase.Initializer"></a>

```typescript
import { UbuntuCustomBase } from 'cdktf-infra-uniovi'

new UbuntuCustomBase(scope: Construct, id: string, version: UbuntuVersion, machineProps: CustomMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.UbuntuCustomBase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.UbuntuCustomBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.UbuntuCustomBase.isConstruct"></a>

```typescript
import { UbuntuCustomBase } from 'cdktf-infra-uniovi'

UbuntuCustomBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.UbuntuCustomBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuCustomBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.UbuntuCustomBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### UbuntuDesktop <a name="UbuntuDesktop" id="cdktf-infra-uniovi.UbuntuDesktop"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.UbuntuDesktop.Initializer"></a>

```typescript
import { UbuntuDesktop } from 'cdktf-infra-uniovi'

new UbuntuDesktop(scope: Construct, id: string, version: UbuntuVersion, machineProps: CustomMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.UbuntuDesktop.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.UbuntuDesktop.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.UbuntuDesktop.isConstruct"></a>

```typescript
import { UbuntuDesktop } from 'cdktf-infra-uniovi'

UbuntuDesktop.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.UbuntuDesktop.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDesktop.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.UbuntuDesktop.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### UbuntuDev <a name="UbuntuDev" id="cdktf-infra-uniovi.UbuntuDev"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.UbuntuDev.Initializer"></a>

```typescript
import { UbuntuDev } from 'cdktf-infra-uniovi'

new UbuntuDev(scope: Construct, id: string, version: UbuntuVersion, machineProps: CustomMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.UbuntuDev.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.UbuntuDev.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.UbuntuDev.isConstruct"></a>

```typescript
import { UbuntuDev } from 'cdktf-infra-uniovi'

UbuntuDev.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.UbuntuDev.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDev.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.UbuntuDev.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### UbuntuDNS <a name="UbuntuDNS" id="cdktf-infra-uniovi.UbuntuDNS"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.UbuntuDNS.Initializer"></a>

```typescript
import { UbuntuDNS } from 'cdktf-infra-uniovi'

new UbuntuDNS(scope: Construct, id: string, version: UbuntuVersion, machineProps: CustomMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.UbuntuDNS.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.UbuntuDNS.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.UbuntuDNS.isConstruct"></a>

```typescript
import { UbuntuDNS } from 'cdktf-infra-uniovi'

UbuntuDNS.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.UbuntuDNS.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuDNS.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.UbuntuDNS.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### UbuntuPro <a name="UbuntuPro" id="cdktf-infra-uniovi.UbuntuPro"></a>

#### Initializers <a name="Initializers" id="cdktf-infra-uniovi.UbuntuPro.Initializer"></a>

```typescript
import { UbuntuPro } from 'cdktf-infra-uniovi'

new UbuntuPro(scope: Construct, id: string, version: UbuntuVersion, machineProps: CustomMachineComponentPropsInterface, provider?: TerraformProvider)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.version">version</a></code> | <code><a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.machineProps">machineProps</a></code> | <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.id"></a>

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.version"></a>

- *Type:* <a href="#cdktf-infra-uniovi.UbuntuVersion">UbuntuVersion</a>

---

##### `machineProps`<sup>Required</sup> <a name="machineProps" id="cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.machineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-infra-uniovi.UbuntuPro.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-infra-uniovi.UbuntuPro.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-infra-uniovi.UbuntuPro.isConstruct"></a>

```typescript
import { UbuntuPro } from 'cdktf-infra-uniovi'

UbuntuPro.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktf-infra-uniovi.UbuntuPro.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.UbuntuPro.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-infra-uniovi.UbuntuPro.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AWSLampStackProps <a name="AWSLampStackProps" id="cdktf-infra-uniovi.AWSLampStackProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.AWSLampStackProps.Initializer"></a>

```typescript
import { AWSLampStackProps } from 'cdktf-infra-uniovi'

const aWSLampStackProps: AWSLampStackProps = { ... }
```


### AWSLempStackProps <a name="AWSLempStackProps" id="cdktf-infra-uniovi.AWSLempStackProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.AWSLempStackProps.Initializer"></a>

```typescript
import { AWSLempStackProps } from 'cdktf-infra-uniovi'

const aWSLempStackProps: AWSLempStackProps = { ... }
```


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


### BaseWebStackProps <a name="BaseWebStackProps" id="cdktf-infra-uniovi.BaseWebStackProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.BaseWebStackProps.Initializer"></a>

```typescript
import { BaseWebStackProps } from 'cdktf-infra-uniovi'

const baseWebStackProps: BaseWebStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.BaseWebStackProps.property.mySqlDatabase">mySqlDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.BaseWebStackProps.property.mySqlPassword">mySqlPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.BaseWebStackProps.property.mySqlRootPassword">mySqlRootPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.BaseWebStackProps.property.mySqlUser">mySqlUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.BaseWebStackProps.property.mySqlVersion">mySqlVersion</a></code> | <code><a href="#cdktf-infra-uniovi.MySQLVersion">MySQLVersion</a></code> | The type of stack being deployed. |

---

##### `mySqlDatabase`<sup>Optional</sup> <a name="mySqlDatabase" id="cdktf-infra-uniovi.BaseWebStackProps.property.mySqlDatabase"></a>

```typescript
public readonly mySqlDatabase: string;
```

- *Type:* string

---

##### `mySqlPassword`<sup>Optional</sup> <a name="mySqlPassword" id="cdktf-infra-uniovi.BaseWebStackProps.property.mySqlPassword"></a>

```typescript
public readonly mySqlPassword: string;
```

- *Type:* string

---

##### `mySqlRootPassword`<sup>Optional</sup> <a name="mySqlRootPassword" id="cdktf-infra-uniovi.BaseWebStackProps.property.mySqlRootPassword"></a>

```typescript
public readonly mySqlRootPassword: string;
```

- *Type:* string

---

##### `mySqlUser`<sup>Optional</sup> <a name="mySqlUser" id="cdktf-infra-uniovi.BaseWebStackProps.property.mySqlUser"></a>

```typescript
public readonly mySqlUser: string;
```

- *Type:* string

---

##### `mySqlVersion`<sup>Optional</sup> <a name="mySqlVersion" id="cdktf-infra-uniovi.BaseWebStackProps.property.mySqlVersion"></a>

```typescript
public readonly mySqlVersion: MySQLVersion;
```

- *Type:* <a href="#cdktf-infra-uniovi.MySQLVersion">MySQLVersion</a>

The type of stack being deployed.

This property is used to determine the specific stack configuration and behavior.
It is a mandatory property and must be one of the supported stack types.

---

*Example*

```typescript
StackType.LAMP
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

### CustomAWSMachineComponentProps <a name="CustomAWSMachineComponentProps" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps.Initializer"></a>

```typescript
import { CustomAWSMachineComponentProps } from 'cdktf-infra-uniovi'

const customAWSMachineComponentProps: CustomAWSMachineComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Security Group ID to associate with the machine. |
| <code><a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.subnetId">subnetId</a></code> | <code>string</code> | Subnet ID where the machine will be deployed. |
| <code><a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.usePersistence">usePersistence</a></code> | <code>boolean</code> | Whether to use persistence for the machine. |
| <code><a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.vpcId">vpcId</a></code> | <code>string</code> | Virtual Private Cloud (VPC) ID where the machine will be deployed. |
| <code><a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.customUserData">customUserData</a></code> | <code>string</code> | Allows the user to pass custom user data for the machine. |
| <code><a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.securityGroupIngressRules">securityGroupIngressRules</a></code> | <code>@cdktf/provider-aws.securityGroup.SecurityGroupIngress[]</code> | *No description.* |

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Security Group ID to associate with the machine.

This is an optional property, and if not specified, a newly created security group will be used.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Subnet ID where the machine will be deployed.

This is an optional property, and if not specified, the default subnet will be used.
If you specify a VPC, you must also specify a subnet within that VPC.

---

##### `usePersistence`<sup>Optional</sup> <a name="usePersistence" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.usePersistence"></a>

```typescript
public readonly usePersistence: boolean;
```

- *Type:* boolean

Whether to use persistence for the machine.

This is an optional property, and if not specified, it defaults to false.
If set to true, the machine will be configured to use persistent storage, using an EBS volume for AWS.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Virtual Private Cloud (VPC) ID where the machine will be deployed.

This is an optional property, and if not specified, the default VPC will be used.

---

##### `customUserData`<sup>Optional</sup> <a name="customUserData" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.customUserData"></a>

```typescript
public readonly customUserData: string;
```

- *Type:* string

Allows the user to pass custom user data for the machine.

This is an optional property; if specified, it will override any default user data that would be generated.
You are usually okay with not passing this property, unless you have really specific requirements for the machine's initialization and want fine-grained
control over the user data script.

---

##### `securityGroupIngressRules`<sup>Optional</sup> <a name="securityGroupIngressRules" id="cdktf-infra-uniovi.CustomAWSMachineComponentProps.property.securityGroupIngressRules"></a>

```typescript
public readonly securityGroupIngressRules: SecurityGroupIngress[];
```

- *Type:* @cdktf/provider-aws.securityGroup.SecurityGroupIngress[]

---

### CustomDockerMachineComponentProps <a name="CustomDockerMachineComponentProps" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.Initializer"></a>

```typescript
import { CustomDockerMachineComponentProps } from 'cdktf-infra-uniovi'

const customDockerMachineComponentProps: CustomDockerMachineComponentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.containerName">containerName</a></code> | <code>string</code> | The custom name or identifier for the Docker container. |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.networks">networks</a></code> | <code>@cdktf/provider-docker.container.ContainerNetworksAdvanced[]</code> | Networks for the Docker container. |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.useVolume">useVolume</a></code> | <code>boolean</code> | Whether you want to use a volume for the container or not; |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.volumes">volumes</a></code> | <code>@cdktf/provider-docker.container.ContainerVolumes[]</code> | List of volumes to use for the container, following Docker's `ContainerVolumes` schema. |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.exposeRDP">exposeRDP</a></code> | <code>boolean</code> | Enables remote desktop access via RDP (default internal & external port is 3389). |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.exposeSSH">exposeSSH</a></code> | <code>boolean</code> | Whether to expose SSH access to the container (defaults to false if not included). |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.exposeVNC">exposeVNC</a></code> | <code>boolean</code> | Enables remote desktop access via VNC (default internal & external port is 5900). |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.externalRDPPort">externalRDPPort</a></code> | <code>number</code> | External port to use for RDP, if `exposeRDP` is true. |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.externalSSHPort">externalSSHPort</a></code> | <code>number</code> | External port to map to container's SSH port (22). |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.externalVNCPort">externalVNCPort</a></code> | <code>number</code> | External port to use for VNC, if `exposeVNC` is true, unless overriden in `ports`. |
| <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.ports">ports</a></code> | <code>@cdktf/provider-docker.container.ContainerPorts[]</code> | List of ports to expose from the container, following Docker's ContainerPorts schema. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.containerName"></a>

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


##### `networks`<sup>Optional</sup> <a name="networks" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.networks"></a>

```typescript
public readonly networks: ContainerNetworksAdvanced[];
```

- *Type:* @cdktf/provider-docker.container.ContainerNetworksAdvanced[]

Networks for the Docker container.

This is an advanced property that allows you to specify multiple networks for the container.
Each network must follow Docker's `ContainerNetworksAdvanced` schema.

---

##### `useVolume`<sup>Optional</sup> <a name="useVolume" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.useVolume"></a>

```typescript
public readonly useVolume: boolean;
```

- *Type:* boolean

Whether you want to use a volume for the container or not;

if not specified, it defaults to false.
If set to true, you can optionally specify `volumes` to define the volumes to use.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.volumes"></a>

```typescript
public readonly volumes: ContainerVolumes[];
```

- *Type:* @cdktf/provider-docker.container.ContainerVolumes[]

List of volumes to use for the container, following Docker's `ContainerVolumes` schema.

Each volume must have a mandatory `containerPath`
If `useVolume` is true, this property's value will be used to define the volumes for the container.
If not specified, internally a default volume will be created.

---

##### `exposeRDP`<sup>Optional</sup> <a name="exposeRDP" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.exposeRDP"></a>

```typescript
public readonly exposeRDP: boolean;
```

- *Type:* boolean

Enables remote desktop access via RDP (default internal & external port is 3389).

---

##### `exposeSSH`<sup>Optional</sup> <a name="exposeSSH" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.exposeSSH"></a>

```typescript
public readonly exposeSSH: boolean;
```

- *Type:* boolean

Whether to expose SSH access to the container (defaults to false if not included).

If true, you can optionally specify `externalSSHPort` (default internal port is 22, external port is 2222).

---

##### `exposeVNC`<sup>Optional</sup> <a name="exposeVNC" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.exposeVNC"></a>

```typescript
public readonly exposeVNC: boolean;
```

- *Type:* boolean

Enables remote desktop access via VNC (default internal & external port is 5900).

---

##### `externalRDPPort`<sup>Optional</sup> <a name="externalRDPPort" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.externalRDPPort"></a>

```typescript
public readonly externalRDPPort: number;
```

- *Type:* number

External port to use for RDP, if `exposeRDP` is true.

---

##### `externalSSHPort`<sup>Optional</sup> <a name="externalSSHPort" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.externalSSHPort"></a>

```typescript
public readonly externalSSHPort: number;
```

- *Type:* number

External port to map to container's SSH port (22).

If not set, port 2222 will try to be assigned

---

##### `externalVNCPort`<sup>Optional</sup> <a name="externalVNCPort" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.externalVNCPort"></a>

```typescript
public readonly externalVNCPort: number;
```

- *Type:* number

External port to use for VNC, if `exposeVNC` is true, unless overriden in `ports`.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="cdktf-infra-uniovi.CustomDockerMachineComponentProps.property.ports"></a>

```typescript
public readonly ports: ContainerPorts[];
```

- *Type:* @cdktf/provider-docker.container.ContainerPorts[]

List of ports to expose from the container, following Docker's ContainerPorts schema.

Each port must have an internal value, external is optional (if not present, Docker will choose a random port).
These ports will take precedence over any other port configured, so in case a port is defined in externalSSHPort,
externalVNCPort or externalRDPPort and explicitly set again in this ports property, this second value is the one
that will get added to the container

---

### CustomMachineComponentPropsInterface <a name="CustomMachineComponentPropsInterface" id="cdktf-infra-uniovi.CustomMachineComponentPropsInterface"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.CustomMachineComponentPropsInterface.Initializer"></a>

```typescript
import { CustomMachineComponentPropsInterface } from 'cdktf-infra-uniovi'

const customMachineComponentPropsInterface: CustomMachineComponentPropsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface.property.providerType">providerType</a></code> | <code><a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a></code> | The provider type for the infrastructure component. |
| <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface.property.awsProps">awsProps</a></code> | <code><a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps">CustomAWSMachineComponentProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface.property.dockerProps">dockerProps</a></code> | <code><a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps">CustomDockerMachineComponentProps</a></code> | *No description.* |

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.CustomMachineComponentPropsInterface.property.providerType"></a>

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


##### `awsProps`<sup>Optional</sup> <a name="awsProps" id="cdktf-infra-uniovi.CustomMachineComponentPropsInterface.property.awsProps"></a>

```typescript
public readonly awsProps: CustomAWSMachineComponentProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.CustomAWSMachineComponentProps">CustomAWSMachineComponentProps</a>

---

##### `dockerProps`<sup>Optional</sup> <a name="dockerProps" id="cdktf-infra-uniovi.CustomMachineComponentPropsInterface.property.dockerProps"></a>

```typescript
public readonly dockerProps: CustomDockerMachineComponentProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.CustomDockerMachineComponentProps">CustomDockerMachineComponentProps</a>

---

### DockerLampStackProps <a name="DockerLampStackProps" id="cdktf-infra-uniovi.DockerLampStackProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.DockerLampStackProps.Initializer"></a>

```typescript
import { DockerLampStackProps } from 'cdktf-infra-uniovi'

const dockerLampStackProps: DockerLampStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.DockerLampStackProps.property.apachePort">apachePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DockerLampStackProps.property.mySqlPort">mySqlPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DockerLampStackProps.property.phpMyAdminPort">phpMyAdminPort</a></code> | <code>number</code> | *No description.* |

---

##### `apachePort`<sup>Optional</sup> <a name="apachePort" id="cdktf-infra-uniovi.DockerLampStackProps.property.apachePort"></a>

```typescript
public readonly apachePort: number;
```

- *Type:* number

---

##### `mySqlPort`<sup>Optional</sup> <a name="mySqlPort" id="cdktf-infra-uniovi.DockerLampStackProps.property.mySqlPort"></a>

```typescript
public readonly mySqlPort: number;
```

- *Type:* number

---

##### `phpMyAdminPort`<sup>Optional</sup> <a name="phpMyAdminPort" id="cdktf-infra-uniovi.DockerLampStackProps.property.phpMyAdminPort"></a>

```typescript
public readonly phpMyAdminPort: number;
```

- *Type:* number

---

### DockerLempStackProps <a name="DockerLempStackProps" id="cdktf-infra-uniovi.DockerLempStackProps"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.DockerLempStackProps.Initializer"></a>

```typescript
import { DockerLempStackProps } from 'cdktf-infra-uniovi'

const dockerLempStackProps: DockerLempStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.DockerLempStackProps.property.mySqlPort">mySqlPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.DockerLempStackProps.property.nginxPort">nginxPort</a></code> | <code>number</code> | *No description.* |

---

##### `mySqlPort`<sup>Optional</sup> <a name="mySqlPort" id="cdktf-infra-uniovi.DockerLempStackProps.property.mySqlPort"></a>

```typescript
public readonly mySqlPort: number;
```

- *Type:* number

---

##### `nginxPort`<sup>Optional</sup> <a name="nginxPort" id="cdktf-infra-uniovi.DockerLempStackProps.property.nginxPort"></a>

```typescript
public readonly nginxPort: number;
```

- *Type:* number

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

### LampStackPropsInterface <a name="LampStackPropsInterface" id="cdktf-infra-uniovi.LampStackPropsInterface"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.LampStackPropsInterface.Initializer"></a>

```typescript
import { LampStackPropsInterface } from 'cdktf-infra-uniovi'

const lampStackPropsInterface: LampStackPropsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.providerType">providerType</a></code> | <code><a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a></code> | The provider type for the infrastructure component. |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlDatabase">mySqlDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlPassword">mySqlPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlRootPassword">mySqlRootPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlUser">mySqlUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlVersion">mySqlVersion</a></code> | <code><a href="#cdktf-infra-uniovi.MySQLVersion">MySQLVersion</a></code> | The type of stack being deployed. |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.includePhpMyAdmin">includePhpMyAdmin</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.awsProps">awsProps</a></code> | <code><a href="#cdktf-infra-uniovi.AWSLampStackProps">AWSLampStackProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.dockerProps">dockerProps</a></code> | <code><a href="#cdktf-infra-uniovi.DockerLampStackProps">DockerLampStackProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.phpMyAdminVersion">phpMyAdminVersion</a></code> | <code><a href="#cdktf-infra-uniovi.PhpMyAdminVersion">PhpMyAdminVersion</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LampStackPropsInterface.property.phpVersion">phpVersion</a></code> | <code><a href="#cdktf-infra-uniovi.ApachePhpVersion">ApachePhpVersion</a></code> | The version of PHP to use in the LAMP stack. |

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.LampStackPropsInterface.property.providerType"></a>

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


##### `mySqlDatabase`<sup>Optional</sup> <a name="mySqlDatabase" id="cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlDatabase"></a>

```typescript
public readonly mySqlDatabase: string;
```

- *Type:* string

---

##### `mySqlPassword`<sup>Optional</sup> <a name="mySqlPassword" id="cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlPassword"></a>

```typescript
public readonly mySqlPassword: string;
```

- *Type:* string

---

##### `mySqlRootPassword`<sup>Optional</sup> <a name="mySqlRootPassword" id="cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlRootPassword"></a>

```typescript
public readonly mySqlRootPassword: string;
```

- *Type:* string

---

##### `mySqlUser`<sup>Optional</sup> <a name="mySqlUser" id="cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlUser"></a>

```typescript
public readonly mySqlUser: string;
```

- *Type:* string

---

##### `mySqlVersion`<sup>Optional</sup> <a name="mySqlVersion" id="cdktf-infra-uniovi.LampStackPropsInterface.property.mySqlVersion"></a>

```typescript
public readonly mySqlVersion: MySQLVersion;
```

- *Type:* <a href="#cdktf-infra-uniovi.MySQLVersion">MySQLVersion</a>

The type of stack being deployed.

This property is used to determine the specific stack configuration and behavior.
It is a mandatory property and must be one of the supported stack types.

---

*Example*

```typescript
StackType.LAMP
```


##### `includePhpMyAdmin`<sup>Required</sup> <a name="includePhpMyAdmin" id="cdktf-infra-uniovi.LampStackPropsInterface.property.includePhpMyAdmin"></a>

```typescript
public readonly includePhpMyAdmin: boolean;
```

- *Type:* boolean

---

##### `awsProps`<sup>Optional</sup> <a name="awsProps" id="cdktf-infra-uniovi.LampStackPropsInterface.property.awsProps"></a>

```typescript
public readonly awsProps: AWSLampStackProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.AWSLampStackProps">AWSLampStackProps</a>

---

##### `dockerProps`<sup>Optional</sup> <a name="dockerProps" id="cdktf-infra-uniovi.LampStackPropsInterface.property.dockerProps"></a>

```typescript
public readonly dockerProps: DockerLampStackProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.DockerLampStackProps">DockerLampStackProps</a>

---

##### `phpMyAdminVersion`<sup>Optional</sup> <a name="phpMyAdminVersion" id="cdktf-infra-uniovi.LampStackPropsInterface.property.phpMyAdminVersion"></a>

```typescript
public readonly phpMyAdminVersion: PhpMyAdminVersion;
```

- *Type:* <a href="#cdktf-infra-uniovi.PhpMyAdminVersion">PhpMyAdminVersion</a>

---

##### `phpVersion`<sup>Optional</sup> <a name="phpVersion" id="cdktf-infra-uniovi.LampStackPropsInterface.property.phpVersion"></a>

```typescript
public readonly phpVersion: ApachePhpVersion;
```

- *Type:* <a href="#cdktf-infra-uniovi.ApachePhpVersion">ApachePhpVersion</a>

The version of PHP to use in the LAMP stack.

This property is optional and can be omitted if the default version is acceptable.
If specified, it is mandatory to use a supported version from the `ApachePhpVersion` enum.

---

### LempStackPropsInterface <a name="LempStackPropsInterface" id="cdktf-infra-uniovi.LempStackPropsInterface"></a>

#### Initializer <a name="Initializer" id="cdktf-infra-uniovi.LempStackPropsInterface.Initializer"></a>

```typescript
import { LempStackPropsInterface } from 'cdktf-infra-uniovi'

const lempStackPropsInterface: LempStackPropsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.providerType">providerType</a></code> | <code><a href="#cdktf-infra-uniovi.ProviderType">ProviderType</a></code> | The provider type for the infrastructure component. |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlDatabase">mySqlDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlPassword">mySqlPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlRootPassword">mySqlRootPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlUser">mySqlUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlVersion">mySqlVersion</a></code> | <code><a href="#cdktf-infra-uniovi.MySQLVersion">MySQLVersion</a></code> | The type of stack being deployed. |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.awsProps">awsProps</a></code> | <code><a href="#cdktf-infra-uniovi.AWSLempStackProps">AWSLempStackProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.dockerProps">dockerProps</a></code> | <code><a href="#cdktf-infra-uniovi.DockerLempStackProps">DockerLempStackProps</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.LempStackPropsInterface.property.phpVersion">phpVersion</a></code> | <code><a href="#cdktf-infra-uniovi.NginxPhpVersion">NginxPhpVersion</a></code> | *No description.* |

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="cdktf-infra-uniovi.LempStackPropsInterface.property.providerType"></a>

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


##### `mySqlDatabase`<sup>Optional</sup> <a name="mySqlDatabase" id="cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlDatabase"></a>

```typescript
public readonly mySqlDatabase: string;
```

- *Type:* string

---

##### `mySqlPassword`<sup>Optional</sup> <a name="mySqlPassword" id="cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlPassword"></a>

```typescript
public readonly mySqlPassword: string;
```

- *Type:* string

---

##### `mySqlRootPassword`<sup>Optional</sup> <a name="mySqlRootPassword" id="cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlRootPassword"></a>

```typescript
public readonly mySqlRootPassword: string;
```

- *Type:* string

---

##### `mySqlUser`<sup>Optional</sup> <a name="mySqlUser" id="cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlUser"></a>

```typescript
public readonly mySqlUser: string;
```

- *Type:* string

---

##### `mySqlVersion`<sup>Optional</sup> <a name="mySqlVersion" id="cdktf-infra-uniovi.LempStackPropsInterface.property.mySqlVersion"></a>

```typescript
public readonly mySqlVersion: MySQLVersion;
```

- *Type:* <a href="#cdktf-infra-uniovi.MySQLVersion">MySQLVersion</a>

The type of stack being deployed.

This property is used to determine the specific stack configuration and behavior.
It is a mandatory property and must be one of the supported stack types.

---

*Example*

```typescript
StackType.LAMP
```


##### `awsProps`<sup>Optional</sup> <a name="awsProps" id="cdktf-infra-uniovi.LempStackPropsInterface.property.awsProps"></a>

```typescript
public readonly awsProps: AWSLempStackProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.AWSLempStackProps">AWSLempStackProps</a>

---

##### `dockerProps`<sup>Optional</sup> <a name="dockerProps" id="cdktf-infra-uniovi.LempStackPropsInterface.property.dockerProps"></a>

```typescript
public readonly dockerProps: DockerLempStackProps;
```

- *Type:* <a href="#cdktf-infra-uniovi.DockerLempStackProps">DockerLempStackProps</a>

---

##### `phpVersion`<sup>Optional</sup> <a name="phpVersion" id="cdktf-infra-uniovi.LempStackPropsInterface.property.phpVersion"></a>

```typescript
public readonly phpVersion: NginxPhpVersion;
```

- *Type:* <a href="#cdktf-infra-uniovi.NginxPhpVersion">NginxPhpVersion</a>

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
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine">deployBasicMachine</a></code> | Generates a basic AWS machine deployment. |
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer">deployBasicServer</a></code> | Generates a basic AWS server using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployCustomMachine">deployCustomMachine</a></code> | Generates a custom AWS machine using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployHardenedServer">deployHardenedServer</a></code> | Generates a hardened AWS server using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployInsecureServer">deployInsecureServer</a></code> | Generates an insecure AWS server using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.AwsDeployStrategy.deployWebStack">deployWebStack</a></code> | Generates a basic web stack using the provided properties. |

---

##### `deployBasicMachine` <a name="deployBasicMachine" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine"></a>

```typescript
public deployBasicMachine(scope: Construct, id: string, basicMachineProps: BasicMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a basic AWS machine deployment.

This method deploys a basic AWS EC2 instance with optional EBS volume for persistence.
It sets up the necessary VPC, subnet, security group, and instance properties.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the resources will be defined.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.id"></a>

- *Type:* string

The ID for the machine component, which will be normalized to ensure it is valid for AWS resources.

---

###### `basicMachineProps`<sup>Required</sup> <a name="basicMachineProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.basicMachineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

An object containing the properties for the basic machine.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including AWS-specific properties.

The `awsProps` property should contain the AWS-specific properties for the machine component.

---

##### `deployBasicServer` <a name="deployBasicServer" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer"></a>

```typescript
public deployBasicServer(scope: Construct, id: string, serverProps: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a basic AWS server using the provided properties.

This method is used to deploy an AWS EC2 instance with basic server properties and optional EBS volume for persistence.
This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
By default, it will expose ports 80 and 443, but this can be customized through the serverProps.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope where the resources will be defined.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.id"></a>

- *Type:* string

The ID for the server component, which will be normalized to ensure it is valid for AWS resources.

---

###### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

An object containing the properties for the server.

At this point it should include AWS-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployBasicServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including AWS-specific properties.

---

##### `deployCustomMachine` <a name="deployCustomMachine" id="cdktf-infra-uniovi.AwsDeployStrategy.deployCustomMachine"></a>

```typescript
public deployCustomMachine(scope: Construct, id: string, customMachineProps: CustomMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a custom AWS machine using the provided properties.

A custom machine is any machine that is slightly more complex than a basic machine, and that will require a custom init script for further personalization.
This method deploys an AWS EC2 instance with custom properties and optional EBS volume for persistence.
It sets up the necessary VPC, subnet, security group, and instance properties, if not provided.
It also allows for custom user data to be provided, which can include additional setup scripts or configurations that will override the original script

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployCustomMachine.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the resources will be defined.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployCustomMachine.parameter.id"></a>

- *Type:* string

The ID for the machine component, which will be normalized to ensure it is valid for AWS resources.

---

###### `customMachineProps`<sup>Required</sup> <a name="customMachineProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployCustomMachine.parameter.customMachineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

An object containing the properties for the custom machine.

At this point it should include AWS-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployCustomMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including AWS-specific properties.

---

##### `deployHardenedServer` <a name="deployHardenedServer" id="cdktf-infra-uniovi.AwsDeployStrategy.deployHardenedServer"></a>

```typescript
public deployHardenedServer(scope: Construct, id: string, serverProps: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a hardened AWS server using the provided properties.

This method is used to deploy an AWS EC2 instance with hardened server properties and optional EBS volume for persistence.
This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
By default, it will expose ports 22 (SSH), 80 (HTTP), and 443 (HTTPS), but this can be customized through the serverProps.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployHardenedServer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope where the resources will be defined.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployHardenedServer.parameter.id"></a>

- *Type:* string

The ID for the server component, which will be normalized to ensure it is valid for AWS resources.

---

###### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployHardenedServer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

An object containing the properties for the server.

At this point it should include AWS-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployHardenedServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including AWS-specific properties.

---

##### `deployInsecureServer` <a name="deployInsecureServer" id="cdktf-infra-uniovi.AwsDeployStrategy.deployInsecureServer"></a>

```typescript
public deployInsecureServer(scope: Construct, id: string, serverProps: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates an insecure AWS server using the provided properties.

This method is used to deploy an AWS EC2 instance with insecure server properties and optional EBS volume for persistence.
This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
By default, it will expose ports 22 (SSH) and 80 (HTTP), but this can be customized through the serverProps.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployInsecureServer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope where the resources will be defined.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployInsecureServer.parameter.id"></a>

- *Type:* string

The ID for the server component, which will be normalized to ensure it is valid for AWS resources.

---

###### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployInsecureServer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

An object containing the properties for the server.

At this point it should include AWS-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.AwsDeployStrategy.deployInsecureServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including AWS-specific properties.

---

##### `deployWebStack` <a name="deployWebStack" id="cdktf-infra-uniovi.AwsDeployStrategy.deployWebStack"></a>

```typescript
public deployWebStack(scope: Construct, id: string, stackType: StackType, props: BaseWebStackProps): void
```

Generates a basic web stack using the provided properties.

This method is used to deploy a web stack using AWS, which can be either a LAMP or LEMP stack depending on the `stackType` property.
It will be used to set up a single instance with everything necessary to run a web stack (database, PHP, web server).

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.AwsDeployStrategy.deployWebStack.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope where the resources will be defined.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.AwsDeployStrategy.deployWebStack.parameter.id"></a>

- *Type:* string

The ID for the instance, which will be normalized to ensure it is valid for AWS resources.

---

###### `stackType`<sup>Required</sup> <a name="stackType" id="cdktf-infra-uniovi.AwsDeployStrategy.deployWebStack.parameter.stackType"></a>

- *Type:* <a href="#cdktf-infra-uniovi.StackType">StackType</a>

The type of stack to deploy, which can be either a basic web stack or a hardened web stack.

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.AwsDeployStrategy.deployWebStack.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BaseWebStackProps">BaseWebStackProps</a>

An object containing the properties for the web stack.

At this point it should include AWS-specific properties.

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
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine">deployBasicMachine</a></code> | Generates a basic, generic Docker container using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer">deployBasicServer</a></code> | Generates a basic Docker server using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployCustomMachine">deployCustomMachine</a></code> | Generates a custom Docker machine using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployHardenedServer">deployHardenedServer</a></code> | Generates a hardened Docker server using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployInsecureServer">deployInsecureServer</a></code> | Generates an insecure Docker server using the provided properties. |
| <code><a href="#cdktf-infra-uniovi.DockerDeployStrategy.deployWebStack">deployWebStack</a></code> | Generates a basic web stack using the provided properties. |

---

##### `deployBasicMachine` <a name="deployBasicMachine" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine"></a>

```typescript
public deployBasicMachine(scope: Construct, id: string, basicMachineProps: BasicMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a basic, generic Docker container using the provided properties.

This method is used to deploy a basic machine using Docker.
It creates a Docker image and a container with the specified configurations.
Optionally, it can include volumes, either a default volume or a set of volumes passed by the user

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which the resources will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.id"></a>

- *Type:* string

The ID of the machine component, which will be normalized to ensure it is valid for Docker resources.

---

###### `basicMachineProps`<sup>Required</sup> <a name="basicMachineProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.basicMachineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BasicMachineComponentPropsInterface">BasicMachineComponentPropsInterface</a>

An object containing the properties for the basic machine.

At this point it should include Docker-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including Docker-specific properties.

---

##### `deployBasicServer` <a name="deployBasicServer" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer"></a>

```typescript
public deployBasicServer(scope: Construct, id: string, serverProps: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a basic Docker server using the provided properties.

This method is used to deploy a basic server using Docker.
It creates a Docker image and a container with the specified configurations.
Optionally, it can include volumes, either a default volume or a set of volumes passed by the user.
This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
By default, it will expose ports 80 and 443, but this can be customized through the serverProps.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which the resources will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.id"></a>

- *Type:* string

The ID of the server component, which will be normalized to ensure it is valid for Docker resources.

---

###### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

An object containing the properties for the server.

At this point it should include Docker-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployBasicServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including Docker-specific properties.

---

##### `deployCustomMachine` <a name="deployCustomMachine" id="cdktf-infra-uniovi.DockerDeployStrategy.deployCustomMachine"></a>

```typescript
public deployCustomMachine(scope: Construct, id: string, customMachineProps: CustomMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a custom Docker machine using the provided properties.

This method is used to deploy a custom machine using Docker.
A custom machine is any machine that is slightly more complex than a basic machine, and that will require a custom Docker image that we build with a custom Dockerfile.
It can include additional configurations such as ports, networks, and volumes.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployCustomMachine.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which the resources will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployCustomMachine.parameter.id"></a>

- *Type:* string

The ID of the machine component, which will be normalized to ensure it is valid for Docker resources.

---

###### `customMachineProps`<sup>Required</sup> <a name="customMachineProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployCustomMachine.parameter.customMachineProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

An object containing the properties for the custom machine.

At this point it should include Docker-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployCustomMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including Docker-specific properties.

---

##### `deployHardenedServer` <a name="deployHardenedServer" id="cdktf-infra-uniovi.DockerDeployStrategy.deployHardenedServer"></a>

```typescript
public deployHardenedServer(scope: Construct, id: string, serverProps: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates a hardened Docker server using the provided properties.

This method is used to deploy an hardened server using Docker.
It creates a Docker image and a container with the specified configurations.
Optionally, it can include volumes, either a default volume or a set of volumes passed by the user.
This method is specifically designed for server deployments, which may include additional
configurations such as ports and networks.
By default, it will expose ports 80 and 443, but this can be customized through the serverProps.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployHardenedServer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which the resources will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployHardenedServer.parameter.id"></a>

- *Type:* string

The ID of the server component, which will be normalized to ensure it is valid for Docker resources.

---

###### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployHardenedServer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

An object containing the properties for the server.

At this point it should include Docker-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployHardenedServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including Docker-specific properties.

---

##### `deployInsecureServer` <a name="deployInsecureServer" id="cdktf-infra-uniovi.DockerDeployStrategy.deployInsecureServer"></a>

```typescript
public deployInsecureServer(scope: Construct, id: string, serverProps: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

Generates an insecure Docker server using the provided properties.

This method is used to deploy an insecure server using Docker.
It creates a Docker image and a container with the specified configurations.
Optionally, it can include volumes, either a default volume or a set of volumes passed by the user.
This method is specifically designed for server deployments, which may include additional
configurations such as ports and networks.
By default, it will expose port 80 (mapped to 8080 by default), but this can be customized through the serverProps.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployInsecureServer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which the resources will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployInsecureServer.parameter.id"></a>

- *Type:* string

The ID of the server component, which will be normalized to ensure it is valid for Docker resources.

---

###### `serverProps`<sup>Required</sup> <a name="serverProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployInsecureServer.parameter.serverProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

An object containing the properties for the server.

At this point it should include Docker-specific properties.

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.DockerDeployStrategy.deployInsecureServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

An object containing internal properties for the machine component, including Docker-specific properties.

---

##### `deployWebStack` <a name="deployWebStack" id="cdktf-infra-uniovi.DockerDeployStrategy.deployWebStack"></a>

```typescript
public deployWebStack(scope: Construct, id: string, stackType: StackType, props: BaseWebStackProps): void
```

Generates a basic web stack using the provided properties.

This method is used to deploy a web stack using Docker, which can be either a LAMP or LEMP stack depending on the `stackType` property.
It will create several Docker containers, including a MySQL container, an Apache or Nginx container with PHP, and optionally a PhpMyAdmin container (only for LAMP stacks)

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.DockerDeployStrategy.deployWebStack.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope in which the resources will be created.

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.DockerDeployStrategy.deployWebStack.parameter.id"></a>

- *Type:* string

The ID of the web stack component, which will be normalized to ensure it is valid for Docker resources.

---

###### `stackType`<sup>Required</sup> <a name="stackType" id="cdktf-infra-uniovi.DockerDeployStrategy.deployWebStack.parameter.stackType"></a>

- *Type:* <a href="#cdktf-infra-uniovi.StackType">StackType</a>

The type of web stack to deploy, which can be either LAMP or LEMP.

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.DockerDeployStrategy.deployWebStack.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BaseWebStackProps">BaseWebStackProps</a>

An object containing the properties for the base web stack, which should include Docker-specific properties.

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
| <code><a href="#cdktf-infra-uniovi.IDeployStrategy.deployCustomMachine">deployCustomMachine</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.IDeployStrategy.deployHardenedServer">deployHardenedServer</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.IDeployStrategy.deployInsecureServer">deployInsecureServer</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.IDeployStrategy.deployWebStack">deployWebStack</a></code> | *No description.* |

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
public deployBasicServer(scope: Construct, id: string, props: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
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

##### `deployCustomMachine` <a name="deployCustomMachine" id="cdktf-infra-uniovi.IDeployStrategy.deployCustomMachine"></a>

```typescript
public deployCustomMachine(scope: Construct, id: string, props: CustomMachineComponentPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.IDeployStrategy.deployCustomMachine.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.IDeployStrategy.deployCustomMachine.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.IDeployStrategy.deployCustomMachine.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.CustomMachineComponentPropsInterface">CustomMachineComponentPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.IDeployStrategy.deployCustomMachine.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---

##### `deployHardenedServer` <a name="deployHardenedServer" id="cdktf-infra-uniovi.IDeployStrategy.deployHardenedServer"></a>

```typescript
public deployHardenedServer(scope: Construct, id: string, props: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.IDeployStrategy.deployHardenedServer.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.IDeployStrategy.deployHardenedServer.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.IDeployStrategy.deployHardenedServer.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.IDeployStrategy.deployHardenedServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---

##### `deployInsecureServer` <a name="deployInsecureServer" id="cdktf-infra-uniovi.IDeployStrategy.deployInsecureServer"></a>

```typescript
public deployInsecureServer(scope: Construct, id: string, props: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface): Construct
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.IDeployStrategy.deployInsecureServer.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.IDeployStrategy.deployInsecureServer.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.IDeployStrategy.deployInsecureServer.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.ServerPropsInterface">ServerPropsInterface</a>

---

###### `internalMachineComponentProps`<sup>Required</sup> <a name="internalMachineComponentProps" id="cdktf-infra-uniovi.IDeployStrategy.deployInsecureServer.parameter.internalMachineComponentProps"></a>

- *Type:* <a href="#cdktf-infra-uniovi.InternalMachineComponentPropsInterface">InternalMachineComponentPropsInterface</a>

---

##### `deployWebStack` <a name="deployWebStack" id="cdktf-infra-uniovi.IDeployStrategy.deployWebStack"></a>

```typescript
public deployWebStack(scope: Construct, id: string, stackType: StackType, props: BaseWebStackProps): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-infra-uniovi.IDeployStrategy.deployWebStack.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdktf-infra-uniovi.IDeployStrategy.deployWebStack.parameter.id"></a>

- *Type:* string

---

###### `stackType`<sup>Required</sup> <a name="stackType" id="cdktf-infra-uniovi.IDeployStrategy.deployWebStack.parameter.stackType"></a>

- *Type:* <a href="#cdktf-infra-uniovi.StackType">StackType</a>

---

###### `props`<sup>Required</sup> <a name="props" id="cdktf-infra-uniovi.IDeployStrategy.deployWebStack.parameter.props"></a>

- *Type:* <a href="#cdktf-infra-uniovi.BaseWebStackProps">BaseWebStackProps</a>

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


### ApachePhpVersion <a name="ApachePhpVersion" id="cdktf-infra-uniovi.ApachePhpVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.ApachePhpVersion.PHP_APACHE_8_2">PHP_APACHE_8_2</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.ApachePhpVersion.PHP_APACHE_8_3">PHP_APACHE_8_3</a></code> | *No description.* |

---

##### `PHP_APACHE_8_2` <a name="PHP_APACHE_8_2" id="cdktf-infra-uniovi.ApachePhpVersion.PHP_APACHE_8_2"></a>

---


##### `PHP_APACHE_8_3` <a name="PHP_APACHE_8_3" id="cdktf-infra-uniovi.ApachePhpVersion.PHP_APACHE_8_3"></a>

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


### MySQLVersion <a name="MySQLVersion" id="cdktf-infra-uniovi.MySQLVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.MySQLVersion.LATEST">LATEST</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.MySQLVersion.LTS">LTS</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.MySQLVersion.MYSQL_9_3">MYSQL_9_3</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.MySQLVersion.MYSQL_8_4">MYSQL_8_4</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.MySQLVersion.LATEST"></a>

---


##### `LTS` <a name="LTS" id="cdktf-infra-uniovi.MySQLVersion.LTS"></a>

---


##### `MYSQL_9_3` <a name="MYSQL_9_3" id="cdktf-infra-uniovi.MySQLVersion.MYSQL_9_3"></a>

---


##### `MYSQL_8_4` <a name="MYSQL_8_4" id="cdktf-infra-uniovi.MySQLVersion.MYSQL_8_4"></a>

---


### NginxPhpVersion <a name="NginxPhpVersion" id="cdktf-infra-uniovi.NginxPhpVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxPhpVersion.PHP_NGINX_8_2">PHP_NGINX_8_2</a></code> | *No description.* |

---

##### `PHP_NGINX_8_2` <a name="PHP_NGINX_8_2" id="cdktf-infra-uniovi.NginxPhpVersion.PHP_NGINX_8_2"></a>

---


### NginxVersion <a name="NginxVersion" id="cdktf-infra-uniovi.NginxVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.NginxVersion.LATEST">LATEST</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.NginxVersion.LATEST"></a>

---


### PhpMyAdminVersion <a name="PhpMyAdminVersion" id="cdktf-infra-uniovi.PhpMyAdminVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.PhpMyAdminVersion.LATEST">LATEST</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="cdktf-infra-uniovi.PhpMyAdminVersion.LATEST"></a>

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


### StackType <a name="StackType" id="cdktf-infra-uniovi.StackType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-infra-uniovi.StackType.LAMP">LAMP</a></code> | *No description.* |
| <code><a href="#cdktf-infra-uniovi.StackType.LEMP">LEMP</a></code> | *No description.* |

---

##### `LAMP` <a name="LAMP" id="cdktf-infra-uniovi.StackType.LAMP"></a>

---


##### `LEMP` <a name="LEMP" id="cdktf-infra-uniovi.StackType.LEMP"></a>

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

