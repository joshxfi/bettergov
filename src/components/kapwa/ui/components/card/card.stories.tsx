import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter, CardImage } from './index';

const meta: Meta<typeof Card> = {
  title: 'Kapwa Design System/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible card component with optional header, content, footer, and image sections. Supports hover effects and accessibility features.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Content to be rendered inside the card',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Enable hover effects (shadow and slight lift)',
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Card Stories
export const Default: Story = {
  args: {
    children: (
      <CardContent>
        <h3 className='text-lg font-semibold mb-2'>Basic Card</h3>
        <p className='text-gray-600'>
          This is a simple card with basic content.
        </p>
      </CardContent>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <CardContent>
        <h3 className='text-lg font-semibold mb-2'>Hoverable Card</h3>
        <p className='text-gray-600'>
          This card has hover effects enabled. Try hovering over it!
        </p>
      </CardContent>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h2 className='text-xl font-bold'>Card with Header</h2>
          <p className='text-sm text-gray-500'>Subtitle or description</p>
        </CardHeader>
        <CardContent>
          <p className='text-gray-600'>
            This card includes a header section with a title and subtitle.
          </p>
        </CardContent>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <CardContent>
          <h3 className='text-lg font-semibold mb-2'>Card with Footer</h3>
          <p className='text-gray-600'>
            This card includes a footer section for actions or additional info.
          </p>
        </CardContent>
        <CardFooter>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-gray-500'>Last updated: Today</span>
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
              Learn More
            </button>
          </div>
        </CardFooter>
      </>
    ),
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <CardImage
          src='https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop'
          alt='Sample image'
        />
        <CardContent>
          <h3 className='text-lg font-semibold mb-2'>Card with Image</h3>
          <p className='text-gray-600'>
            This card includes an image at the top.
          </p>
        </CardContent>
      </>
    ),
  },
};

export const CompleteCard: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <CardImage
          src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop'
          alt='Government building'
        />
        <CardHeader>
          <h2 className='text-xl font-bold'>Government Service</h2>
          <p className='text-sm text-gray-500'>Department of Public Services</p>
        </CardHeader>
        <CardContent>
          <p className='text-gray-600 mb-4'>
            Complete information about this government service including
            requirements, process, and contact details.
          </p>
          <div className='flex flex-wrap gap-2'>
            <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'>
              Online
            </span>
            <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full'>
              Available
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-gray-500'>
              Processing time: 3-5 days
            </span>
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
              Apply Now
            </button>
          </div>
        </CardFooter>
      </>
    ),
  },
};

// Service Card Example
export const ServiceCard: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <CardHeader>
          <div className='flex items-start justify-between'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Birth Certificate
              </h3>
              <p className='text-sm text-gray-500'>Civil Registry Office</p>
            </div>
            <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full'>
              Online Available
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-gray-600 mb-3'>
            Request for certified true copy of birth certificate for various
            legal purposes.
          </p>
          <div className='space-y-2'>
            <div className='flex items-center text-sm'>
              <span className='font-medium text-gray-700 w-20'>Fee:</span>
              <span className='text-gray-600'>₱155.00</span>
            </div>
            <div className='flex items-center text-sm'>
              <span className='font-medium text-gray-700 w-20'>Duration:</span>
              <span className='text-gray-600'>1-2 working days</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className='flex gap-2'>
            <button className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
              Apply Online
            </button>
            <button className='px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors'>
              Learn More
            </button>
          </div>
        </CardFooter>
      </>
    ),
  },
};

// News Card Example
export const NewsCard: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <CardImage
          src='https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=200&fit=crop'
          alt='News article'
        />
        <CardContent>
          <div className='flex items-center gap-2 mb-2'>
            <span className='px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full'>
              Breaking
            </span>
            <span className='text-xs text-gray-500'>2 hours ago</span>
          </div>
          <h3 className='text-lg font-semibold mb-2 line-clamp-2'>
            New Digital Services Portal Launched for Faster Government
            Transactions
          </h3>
          <p className='text-gray-600 text-sm line-clamp-3'>
            The government announces the launch of a new digital services portal
            aimed at streamlining citizen services and reducing processing times
            for various government transactions.
          </p>
        </CardContent>
        <CardFooter>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-gray-500'>Philippine Government</span>
            <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
              Read More →
            </button>
          </div>
        </CardFooter>
      </>
    ),
  },
};

// Custom Styling Example
export const CustomStyling: Story = {
  args: {
    className: 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200',
    children: (
      <CardContent>
        <h3 className='text-lg font-semibold mb-2 text-blue-900'>
          Custom Styled Card
        </h3>
        <p className='text-blue-700'>
          This card demonstrates custom styling with a gradient background and
          blue theme.
        </p>
      </CardContent>
    ),
  },
};

// Loading State Example
export const LoadingState: Story = {
  args: {
    children: (
      <CardContent>
        <div className='animate-pulse'>
          <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
          <div className='h-3 bg-gray-200 rounded w-1/2 mb-4'></div>
          <div className='space-y-2'>
            <div className='h-3 bg-gray-200 rounded'></div>
            <div className='h-3 bg-gray-200 rounded w-5/6'></div>
          </div>
        </div>
      </CardContent>
    ),
  },
};
