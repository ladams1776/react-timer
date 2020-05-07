import React from 'react';
import selectEventTags from '../selectEventTags';

describe('src/pages/createOrEditTask/selectors/__test__/selectEventTags.test.js', () => {
    describe('selectEventTags', () => {
        it('should return the specific tag', () => {
            // Arrange
            const allTags = [
                {
                    _id: 1,
                    name: 'tag 1',
                    description: 'tag 1'
                },
                {
                    _id: 2,
                    name: 'tag 2',
                    description: 'tag 2'
                },
                {
                    _id: 3,
                    name: 'tag 3',
                    description: 'tag 3'
                }
            ];

            const expected = [
                allTags[1],
                allTags[2]
            ]

            const event = {
                tags: [
                    { value: allTags[1]._id },
                    { value: allTags[2]._id }
                ]
            }

            const target = selectEventTags(allTags);

            // Act
            const actual = target(event);

            // Assert
            expect(actual).toEqual(expected);
        });
    });
});