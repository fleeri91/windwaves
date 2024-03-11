import React from 'react';
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe';
import Toggle from './Toggle';
expect.extend(toHaveNoViolations);

describe('Toggle', () => {
	it('should not have any accessibility issues', async () => {
		const { container } = render(<Toggle>Test</Toggle>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
