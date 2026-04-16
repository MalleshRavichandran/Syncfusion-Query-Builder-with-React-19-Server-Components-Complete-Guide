# Syncfusion Query Builder with React 19 Server Components - Complete Guide

## Repository Description

A comprehensive guide and implementation demonstrating how to build advanced query builders using Syncfusion components with React 19 Server Components, covering connector operators, rules, groups, and real-world applications.

## Project Overview

This repository showcases best practices for integrating Syncfusion's Query Builder component within React 19's modern server component architecture. Learn how to create flexible, powerful query construction interfaces that support complex filtering logic with different connector operators (AND, OR, NOT).

## Features

- **React 19 Server Components**: Leverage the latest React architecture for optimal performance
- **Syncfusion Integration**: Deep dive into Syncfusion Query Builder component capabilities
- **Multiple Connector Types**: Master AND, OR, and NOT operators for complex queries
- **Rules and Groups**: Understand proper structuring and nesting of rules within groups
- **Advanced Patterns**: Real-world examples and best practices for query composition
- **Type-Safe Implementation**: TypeScript integration for robust, maintainable code

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- React 19 installed in your project
- Syncfusion license or community license
- Familiarity with React Server Components concepts
- Basic understanding of query logic and boolean operators

### Installation

1. Clone or download this repository
2. Install dependencies: `npm install` or `yarn install`
3. Review configuration and examples
4. Adapt implementations to your specific use case

## Usage Examples

### Basic Query Builder Setup

Connect individual rules with operators:

```javascript
const query = {
  condition: 'and',
  rules: [
    { field: 'status', operator: '==', value: 'active' },
    { field: 'priority', operator: '!=', value: 'low' }
  ]
};
```

### Working with Groups

Create complex queries by combining rules and groups:

```javascript
const complexQuery = {
  condition: 'or',
  rules: [
    {
      condition: 'and',
      rules: [
        { field: 'status', operator: '==', value: 'active' },
        { field: 'assigned_to', operator: '==', value: 'user@domain.com' }
      ]
    }
  ]
};
```

## Configuration

Customize the Query Builder with:
- Custom operators and field types
- Styling and theme options
- Validation rules and constraints
- Data source bindings

## Contributing

Contributions are welcome! Please submit improvements, examples, or clarifications through pull requests or issues.

## License

This repository is provided for educational and reference purposes. Review license terms for Syncfusion components accordingly.

## Support

For questions or issues, please create an issue in the repository or refer to the Syncfusion documentation.
