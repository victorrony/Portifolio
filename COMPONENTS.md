# 📚 Documentação de Componentes

Guia completo dos componentes React do portfólio.

---

## 🏗️ Estrutura de Componentes

### Layout & Navegação

#### **NavBar**

`src/app/components/navbar/NavBar.jsx`

Barra de navegação responsiva com menu mobile.

**Features:**

- Menu hamburger em mobile
- Links com ícones
- Scroll smooth para seções
- Estado ativo baseado em scroll

**Uso:**

```jsx
<NavBar />
```

---

### Seções Principais

#### **Hero**

`src/app/components/hero/Hero.jsx`

Seção hero com animações GSAP e modelo 3D.

**Features:**

- Animação de texto com SplitText
- Computador 3D interativo (Three.js)
- Links sociais animados
- Título rotativo

**Dependencies:**

- GSAP, SplitText
- ComputersCanvas (3D)

---

#### **About**

`src/app/components/about/About.jsx`

Seção sobre o desenvolvedor com cards de serviços.

**Props:** Nenhuma (usa constantes)

**Subcomponentes:**

- `AboutCard` - Card individual de serviço

**Exemplo:**

```jsx
<About />
```

---

#### **AboutCard**

`src/app/components/about/AboutCard.jsx`

Card animado com efeito tilt 3D.

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `index` | number | ✅ | Índice para animação stagger |
| `title` | string | ✅ | Título do serviço |
| `icon` | string | ✅ | Caminho do ícone |

**Exemplo:**

```jsx
<AboutCard index={0} title="Web Developer" icon="/assets/web.png" />
```

---

#### **Experience**

`src/app/components/experience/Experience.jsx`

Timeline de experiências profissionais + Skills e Tools.

**Features:**

- Timeline vertical interativa
- Grid de skills com ícones 3D
- Grid de tools
- Tooltips em hover

**Subcomponentes:**

- `ExperienceCard` - Card de experiência
- `DynamicBallCanvas` - Ícone 3D skill/tool

---

#### **Project**

`src/app/components/project/Project.jsx`

Galeria de projetos com cards interativos.

**Features:**

- Grid responsivo
- Animações stagger
- Cards com tilt 3D

**Subcomponentes:**

- `ProjectCard` - Card individual de projeto

---

#### **ProjectCard**

`src/app/components/project/ProjectCard.jsx`

Card de projeto com imagem, tags e links.

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `index` | number | ✅ | Índice para animação |
| `name` | string | ✅ | Nome do projeto |
| `description` | string | ✅ | Descrição |
| `tags` | array | ✅ | Tags de tecnologias |
| `image` | string | ✅ | Imagem do projeto |
| `source_code_link` | string | ✅ | Link GitHub |
| `source_code_link_vercel` | string | ❌ | Link demo live |

**Exemplo:**

```jsx
<ProjectCard
  index={0}
  name="E-commerce"
  description="Loja online completa"
  tags={[{ name: "React", icon: "/assets/tech/react.png" }]}
  image="/assets/project.png"
  source_code_link="https://github.com/..."
  source_code_link_vercel="https://demo.vercel.app"
/>
```

---

#### **Contact**

`src/app/components/contact/Contact.jsx`

Formulário de contato com modelo 3D da Terra.

**Features:**

- Validação de formulário
- Rate limiting
- Feedback com modal
- Planeta 3D interativo

**State:**

```typescript
{
  form: { name: string, email: string, message: string },
  loading: boolean,
  modalOpen: boolean,
  modalSuccess: boolean
}
```

---

### Componentes 3D

#### **BallCanvas**

`src/app/components/experience/BallCanvas.jsx`

Canvas 3D com esfera e textura (skills/tools).

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | string | ✅ | URL da textura |
| `name` | string | ✅ | Nome para tooltip |
| `index` | number | ✅ | Índice do item |

**Otimizações:**

- Limite de 10 Canvas simultâneos
- Fallback 2D em mobile
- Memoizado com React.memo()

**Exemplo:**

```jsx
<BallCanvas icon="/assets/tech/react.png" name="React JS" index={0} />
```

---

#### **ComputersCanvas**

`src/app/components/hero/Computers.jsx`

Modelo 3D de computador no Hero.

**Features:**

- Escala responsiva
- OrbitControls com limites
- Auto-rotate
- Suspense com loader

---

#### **EarthCanvas**

`src/app/components/contact/Earth.jsx`

Modelo 3D da Terra na seção Contact.

**Features:**

- Rotação automática
- Interativo com OrbitControls
- Carregamento lazy

---

#### **StarsCanvas**

`src/app/components/contact/Stars.jsx`

Fundo animado com partículas de estrelas.

**Otimizações:**

- 1500 partículas (reduzido de 5000)
- Rotation animada com useFrame
- frameloop demand

---

### Componentes Utilitários

#### **ErrorBoundary**

`src/app/components/ErrorBoundary.jsx`

Captura erros de React com UI amigável.

**Features:**

- Mostra detalhes em dev
- UI limpa em produção
- Opções de recuperação

---

#### **Canvas3DErrorBoundary**

`src/app/components/Canvas3DErrorBoundary.jsx`

Error boundary específico para Canvas 3D.

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | node | ✅ | Componentes filhos |
| `fallbackMessage` | string | ❌ | Mensagem de erro |
| `showRetry` | boolean | ❌ | Mostrar botão retry |

**Exemplo:**

```jsx
<Canvas3DErrorBoundary fallbackMessage="3D not available" showRetry>
  <BallCanvas {...props} />
</Canvas3DErrorBoundary>
```

---

#### **Loader**

`src/app/components/Loader.jsx`

Loader para Suspense de componentes 3D.

**Uso:**

```jsx
<Suspense fallback={<Loader />}>
  <Earth />
</Suspense>
```

---

#### **Modal**

`src/app/components/contact/Modal.jsx`

Modal de feedback (sucesso/erro).

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | boolean | ✅ | Estado de abertura |
| `onClose` | function | ✅ | Callback ao fechar |
| `message` | string | ✅ | Mensagem a exibir |
| `isSuccess` | boolean | ✅ | Sucesso ou erro |

**Exemplo:**

```jsx
<Modal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  message="Email sent successfully!"
  isSuccess={true}
/>
```

---

### Higher-Order Components

#### **SectionWrapper**

`src/app/hoc/SectionWrapper.jsx`

HOC que adiciona animações e padding às seções.

**Uso:**

```jsx
export default SectionWrapper(YourComponent, "section-id");
```

**Features:**

- Adiciona motion.section
- Padding responsivo
- Hash navigation
- Animação de entrada

---

## 🎨 Utilitários de Animação

### **motion.ts**

`src/app/utils/motion.ts`

Variantes de animação reutilizáveis.

**Funções:**

#### `textVariant(delay?)`

Animação de texto de cima para baixo.

```typescript
textVariant(0.5); // delay de 0.5s
```

#### `fadeIn(direction, type, delay, duration)`

Fade in de qualquer direção.

```typescript
fadeIn("left", "spring", 0.2, 1);
// direction: "left" | "right" | "up" | "down" | ""
// type: "spring" | "tween" | "inertia"
```

#### `zoomIn(delay, duration)`

Zoom in com opacidade.

```typescript
zoomIn(0.1, 0.75);
```

#### `slideIn(direction, type, delay, duration)`

Slide in de qualquer direção.

```typescript
slideIn("right", "tween", 0.3, 1);
```

#### `staggerContainer(staggerChildren, delayChildren)`

Container para animações stagger.

```typescript
staggerContainer(0.2, 0.1);
```

---

## 📝 Constantes

### **constants/index.js**

Dados estáticos do portfólio.

**Exports:**

- `navLinks` - Links de navegação
- `services` - Serviços oferecidos
- `technologies` - Stack de tecnologias
- `tools` - Ferramentas utilizadas
- `experiences` - Timeline de experiências
- `projects` - Portfolio de projetos
- `socialLinks` - Links de redes sociais

**Exemplo de Uso:**

```jsx
import { projects } from "@/app/constants";

projects.map((project) => <ProjectCard key={project.name} {...project} />);
```

---

## 🎯 Melhores Práticas

### Performance

- ✅ Lazy load componentes 3D
- ✅ Memoize componentes pesados
- ✅ Limite contextos WebGL
- ✅ Fallback 2D em mobile

### Animações

- ✅ Use `viewport={{ once: true }}`
- ✅ Reutilize variantes de motion
- ✅ Evite animações em loops

### Código

- ✅ PropTypes ou TypeScript
- ✅ Error boundaries para 3D
- ✅ Cleanup em useEffect
- ✅ Suspense para lazy loading

---

## 🔧 Troubleshooting

### Problema: "Canvas has been tainted"

**Solução**: Adicionar `crossOrigin="anonymous"` às texturas.

### Problema: WebGL context lost

**Solução**: Reduzir número de Canvas simultâneos (max 10).

### Problema: Animações lentas

**Solução**:

- Usar `viewport={{ once: true }}`
- Reduzir partículas
- Usar `frameloop="demand"`

---

## 📖 Recursos

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)
- [Next.js Docs](https://nextjs.org/docs)

---

**Última atualização**: Sprint 4-5 (TypeScript + CI/CD)
