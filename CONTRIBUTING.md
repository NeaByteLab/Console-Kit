# Contributing Guideline

Thank you for your interest in contributing to Console-Kit! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 22.0.0 or higher
- npm or yarn package manager
- Git

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/NeaByteLab/Console-Kit.git
cd Console-Kit

# Install dependencies
npm install

# Build the project
npm run build
```

## 🛠️ Development Workflow

### Available Scripts

```bash
npm run dev          # Watch mode for development
npm run build        # Build the project
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
npm run check-all    # Run all quality checks
npm run clean        # Clean build artifacts
```

### Code Quality Standards

- **TypeScript**: Strict mode enabled, no `any` types
- **Linting**: ESLint with SonarJS rules
- **Formatting**: Prettier with 2-space indentation
- **Type Safety**: All functions must have proper JSDoc

## 📝 Code Style Guidelines

### TypeScript Rules

- Use `const` over `let` when possible
- No `var` declarations
- Always provide explicit types
- Use interfaces for object shapes
- Prefer arrow functions for callbacks

### Naming Conventions

- **Files/Directories**: kebab-case (`console-kit.ts`)
- **Main Class Files**: PascalCase (`ConsoleKit.ts`)
- **Variables/Functions**: camelCase (`getColorCode`)
- **Classes/Types**: PascalCase (`ConsoleKit`)
- **Constants**: SCREAMING_SNAKE_CASE (`NAMED_COLORS`)

### JSDoc Requirements

- All public functions must have JSDoc
- Include `@param` and `@returns` tags
- Use clear, descriptive language
- Avoid marketing/enhancement words
- Focus on functionality, not product promotion

## 🔧 Development Process

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Follow the coding standards
- Verify functionality with the demo examples
- Update documentation as needed

### 3. Quality Checks

```bash
npm run check-all
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat(spinner): add new animation style ✨"
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

## 📋 Pull Request Guidelines

### PR Requirements

- **Title**: Clear, descriptive title
- **Description**: Explain what and why, not how
- **Functionality**: Verify changes work with demo examples
- **Documentation**: Update docs if API changes
- **Quality**: All checks must pass

### Commit Message Format

```
type(scope): description :emoji:

feat(spinner): add new animation style ✨
fix(colors): resolve hex color parsing issue 🐛
docs(readme): update installation instructions 📚
style(code): fix formatting issues 🎨
refactor(spinner): improve performance 🚀
chore(build): update dependencies 🔧
```

### Types

- `feat` ✨ - New feature
- `fix` 🐛 - Bug fix
- `docs` 📚 - Documentation changes
- `style` 🎨 - Code style changes
- `refactor` 🚀 - Code refactoring
- `chore` 🔧 - Build/tooling changes

## 📚 Documentation

### What to Document

- All public APIs
- Configuration options
- Usage examples
- Breaking changes

### Documentation Standards

- Clear and concise language
- Practical examples
- No marketing language
- Focus on functionality

## 🐛 Bug Reports

### Bug Report Template

```markdown
**Description**: Clear description of the issue

**Steps to Reproduce**:

1. Step 1
2. Step 2
3. Step 3

**Expected Behavior**: What should happen

**Actual Behavior**: What actually happens

**Environment**:

- Node.js version:
- OS:
- Console-Kit version:

**Additional Context**: Any other relevant information
```

## 💡 Feature Requests

### Feature Request Guidelines

- Explain the use case clearly
- Provide examples if possible
- Consider backward compatibility
- Discuss implementation approach

## 🤝 Code Review Process

### Review Checklist

- [ ] Code follows style guidelines
- [ ] Functionality verified with demo examples
- [ ] Documentation is updated
- [ ] No breaking changes (unless intentional)
- [ ] Performance considerations addressed

### Review Timeline

- Initial review within 48 hours
- Follow-up reviews within 24 hours
- Final approval requires 2 maintainer approvals

## 📞 Getting Help

### Communication Channels

- **Issues**: GitHub Issues for bugs and features
- **Discussions**: GitHub Discussions for questions
- **Email**: me@neabyte.com for private matters

### Before Asking

- Check existing issues and discussions
- Review the documentation
- Try to reproduce the issue locally

## 🎯 Contribution Areas

### High Priority

- Bug fixes
- Performance improvements
- Documentation updates
- Code quality improvements

### Medium Priority

- New spinner styles
- Additional color utilities
- Enhanced error handling
- Platform compatibility

### Low Priority

- Cosmetic changes
- Minor optimizations
- Additional examples

## 📄 License

By contributing to Console-Kit, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to Console-Kit! Your contributions help make this project better for everyone in the community.

---

**Questions?** Feel free to open an issue or start a discussion on GitHub!
