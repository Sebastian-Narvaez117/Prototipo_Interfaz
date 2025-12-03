# 📚 Biblioteca Digital Anime

> Prototipo de interfaz diseñado para una experiencia inmersiva de lectura y exploración de contenido anime.

## 🎯 Descripción del Proyecto

Este repositorio contiene el prototipo completo de una biblioteca digital especializada en anime, diseñado inicialmente en Stitch e implementado con HTML/CSS puro. El proyecto ofrece una experiencia de usuario fluida que abarca desde la autenticación hasta la lectura personalizada de contenido.

---

## 🗺️ Arquitectura de Navegación

```
Registro → Login → Inicio → Explorar → Detalles
                              ↓
                      Mi Biblioteca → Lectura
                              ↓
                      Perfil → Configuración
                              ↓
                      Búsqueda Avanzada
```

El flujo está optimizado para proporcionar acceso rápido a las funcionalidades principales mientras mantiene una estructura intuitiva y coherente.

---

## 🖼️ Pantallas del Prototipo

### ✍️ 1. Registro
**Función principal:** Creación de nueva cuenta de usuario

Primera interacción con nuevos usuarios, diseñada para hacer el proceso de registro simple y rápido.

- Formulario de registro con validación en tiempo real
- Campos obligatorios: email, usuario, contraseña
- Verificación de fortaleza de contraseña
- Aceptación de términos y condiciones
- Opción de registro con redes sociales

![Registro](Docs/img/Registro.png)

---

### 🔐 2. Login
**Función principal:** Autenticación segura del usuario

Punto de entrada a la plataforma con validación de credenciales y experiencia de acceso optimizada.

- Formulario centrado con diseño minimalista
- Validación en tiempo real
- Opciones de recuperación de contraseña

![Login](Docs/img/Login.png)

---

### 🏠 3. Inicio
**Función principal:** Dashboard con contenido destacado

Presenta una selección curada de animes recientes, populares y recomendaciones personalizadas.

- Cards dinámicas con portadas de alta calidad
- Buscador inteligente en el header
- Secciones organizadas por categorías

![Inicio](Docs/img/Inicio.png)

---

### 🔍 4. Explorar
**Función principal:** Catálogo completo con filtros avanzados

Herramienta de descubrimiento que permite navegar todo el contenido disponible con múltiples criterios de búsqueda.

- Sistema de filtros multicapa (género, año, popularidad)
- Grid responsivo adaptable
- Paginación intuitiva

![Explorar](Docs/img/Catalogo.png)

---

### 📄 5. Detalles del Anime
**Función principal:** Información detallada del título seleccionado

Vista dedicada que proporciona contexto completo antes de iniciar la lectura.

- Sinopsis expandida
- Metadatos (autor, año, género, episodios)
- Acciones rápidas: "Leer ahora" y "Agregar a biblioteca"
- Sección de títulos relacionados

![Detalles](Docs/img/Detalle.png)

---

### 📖 6. Mi Biblioteca
**Función principal:** Colección personal del usuario

Espacio personalizado donde se centralizan todos los contenidos guardados y en progreso.

- Organización por estado (leyendo, completado, pendiente)
- Acceso rápido a la última página leída
- Sistema de etiquetas personalizadas

![Mi Biblioteca](Docs/img/LibrosGuardados.png)

---

### 👁️ 7. Lectura
**Función principal:** Visor optimizado de contenido

Experiencia de lectura inmersiva con controles intuitivos y personalización visual.

- Navegación fluida entre páginas (flechas, gestos)
- Modo oscuro/claro integrado
- Zoom y ajuste de visualización
- Marcador automático de progreso

![Lectura](Docs/img/Lectura.png)

---

### 👤 8. Perfil
**Función principal:** Gestión de datos personales

Panel de control del usuario con estadísticas y configuración de cuenta.

- Avatar personalizable
- Estadísticas de lectura (títulos leídos, horas, racha)
- Gestión de notificaciones
- Historial de actividad

![Perfil](Docs/img/Perfil.png)

---


### 🎯 9. Búsqueda Avanzada
**Función principal:** Sistema de filtrado complejo y detallado

Herramienta poderosa para usuarios que buscan contenido específico con criterios múltiples y personalizados.

- Filtros combinables (género, autor, año, estado)
- Búsqueda por palabras clave en título y sinopsis
- Ordenamiento avanzado (popularidad, fecha, calificación)
- Rango de episodios/capítulos
- Exclusión de géneros no deseados
- Guardado de búsquedas favoritas
- Resultados en tiempo real con preview

![Búsqueda Avanzada](Docs/img/BusquedaAvanzada.png)

---

## 🛠️ Tecnologías Utilizadas

- **Diseño:** Stitch (prototipado)
- **Frontend:** HTML5, CSS3
- **Metodología:** Mobile-first, diseño responsivo

## 📦 Estructura del Proyecto

```
/
├── docs/
│   └── img/           # Capturas de pantalla del prototipo
├── src/
│   ├── html/          # Archivos HTML por pantalla
│   └── css/           # Hojas de estilo
└── README.md
```

## 🚀 Características Destacadas

- ✨ Interfaz moderna y limpia
- 🎨 Sistema de temas (modo claro/oscuro)
- 📱 Diseño completamente responsivo
- ♿ Enfoque en accesibilidad
- 🔖 Sistema de marcadores automático
- 🎯 Navegación intuitiva y fluida

---

## 📝 Notas de Desarrollo

Este prototipo sienta las bases para una implementación funcional completa. Las pantallas están diseñadas siguiendo principios de UX/UI para garantizar una experiencia de usuario óptima desde el primer contacto hasta la lectura habitual.

---

<div align="center">

**Desarrollado con 💙 para la comunidad anime**

</div>