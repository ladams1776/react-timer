import React from 'react';
import selectTags from '../selectTags';

describe('src/pages/createOrEditTask/selectors/__test__/selectTags.test.js', () => {
    describe('selectTags', () => {
        it('should return the specific tag, with matching value and _id', () => {
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

            const tags = [
                { value: allTags[1]._id },
                { value: allTags[2]._id }
            ];

            const target = selectTags(allTags);

            // Act
            const actual = target(tags);

            // Assert
            expect(actual).toEqual(expected);
        });

        it('should return the specific tag, with matching matching _id', () => {
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

            const tags = [
                { _id: allTags[1]._id },
                { _id: allTags[2]._id }
            ];

            const target = selectTags(allTags);

            // Act
            const actual = target(tags);

            // Assert
            expect(actual).toEqual(expected);
        });
    });
});